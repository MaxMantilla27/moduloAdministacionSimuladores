import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TogActualizarTareaDTO, TogAgregarTareaDTO } from 'src/app/Models/Tog/TogTareaDTO';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { TogCategoriasService } from 'src/app/shared/Services/Tog/Tog-Categorias/tog-categorias.service';
import { TogTareaService } from 'src/app/shared/Services/Tog/Tog-Tarea/tog-tarea.service';

@Component({
  selector: 'app-tog-modal-agregar-subcategoria',
  templateUrl: './tog-modal-agregar-subcategoria.component.html',
  styleUrls: ['./tog-modal-agregar-subcategoria.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TogModalAgregarSubcategoriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TogModalAgregarSubcategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private alertaService: AlertaService,
    private _Tarea: TogTareaService,
    private _Categorias: TogCategoriasService,
) {}

loading:any
loader:any;
formCategoria: FormGroup = this.formBuilder.group({
  Id: [0,[Validators.required]],
  NombreCategoria: ['', [Validators.required]],
  IdCategoria:[0,[Validators.required]],
  CantidadPreguntasTotales: [0,[Validators.required]],
  CantidadPreguntasExamen: [0,[Validators.required]],
  Proporcion: [0,[Validators.required]],
  Logo: [ new File([],''), [Validators.required]]
});
public nombrefile='Ningún archivo seleccionado'

public selectedFiles?: FileList;
public file:any;
public filestatus=false
public fileErrorMsg=''

public listaComboCategorias:any;


public jsonEnvio:TogAgregarTareaDTO = {
  IdSimuladorTogDominio:0 ,
  Nombre: '',
  CantidadPreguntasPorExamen: 0,
  CantidadTotal:0,
  ImgLogo: new File([],''),
  Proporcion: 0,
}


public jsonActualizar:TogActualizarTareaDTO = {
  Id:0,
  IdSimuladorTogDominio: 0,
  Nombre: '',
  CantidadPreguntasPorExamen: 0,
  CantidadTotal: 0,
  ImgLogo: new File([],''),
  Proporcion: 0,
}


  ngOnInit(): void {
    this.ObtenerComboCategorias()
    console.log(this.data)

    if(this.data!=undefined)
    {
      this.formCategoria.get('Id')?.setValue(this.data[0].id)
      this.formCategoria.get('NombreCategoria')?.setValue(this.data[0].nombre)
      this.formCategoria.get('IdCategoria')?.setValue(this.data[0].idSimuladorTogDominio)
      this.formCategoria.get('CantidadPreguntasTotales')?.setValue(this.data[0].cantidadTotal)
      this.formCategoria.get('CantidadPreguntasExamen')?.setValue(this.data[0].cantidadPreguntasPorExamen)
      this.formCategoria.get('Proporcion')?.setValue(this.data[0].proporcion)
      this.formCategoria.get('Logo')?.setValue(this.data[0].imgLogo)
      console.log(this.formCategoria)
    }
    else{
      this.formCategoria.reset();
    }
  }

  Cancelar(){
    this.dialogRef.close();
  }


  FiltrarSubs(e:any){
    console.log(e)
   }


  ObtenerComboCategorias() {
    this._Categorias.ObtenerComboCategorias().subscribe({
      next: (x: any) => {
        this.listaComboCategorias = x.categorias;
        console.log(this.listaComboCategorias)
      },
    });
  }




  Agregar(){

    if(this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.jsonEnvio.ImgLogo = file;
      }
    }

    this.jsonEnvio.Nombre = this.formCategoria.get('NombreCategoria')?.value
    this.jsonEnvio.IdSimuladorTogDominio = this.formCategoria.get('IdCategoria')?.value
    this.jsonEnvio.CantidadPreguntasPorExamen = this.formCategoria.get('CantidadPreguntasExamen')?.value
    this.jsonEnvio.CantidadTotal= this.formCategoria.get('CantidadPreguntasTotales')?.value
    this.jsonEnvio.Proporcion = this.formCategoria.get('Proporcion')?.value



    console.log(this.jsonEnvio)

    this._Tarea.AgregarSubCategoria(this.jsonEnvio).subscribe({

      next: (x) => {
        this.alertaService.mensajeIcon(
          'Aviso',
          'La lista se agrego correctamente',
          'success'
        );

        this.dialogRef.close()
      },
      error:(e)=>{
        this.alertaService.mensajeError(e);

      },
      complete: () => {

      },
    });
  }


  Editar(){

    if(this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.jsonActualizar.ImgLogo = file;
      }
    }
    this.jsonActualizar.Id = this.data[0].id
    this.jsonActualizar.Nombre = this.formCategoria.get('NombreCategoria')?.value
    this.jsonActualizar.IdSimuladorTogDominio = this.formCategoria.get('IdCategoria')?.value
    this.jsonActualizar.CantidadPreguntasPorExamen = this.formCategoria.get('CantidadPreguntasExamen')?.value
    this.jsonActualizar.CantidadTotal= this.formCategoria.get('CantidadPreguntasTotales')?.value
    this.jsonActualizar.Proporcion = this.formCategoria.get('Proporcion')?.value

    console.log(this.jsonActualizar)

    this._Tarea.ActualizarSubCategoria(this.jsonActualizar).subscribe({

      next: (x) => {
        this.alertaService.mensajeIcon(
          'Aviso',
          'La lista se actualizo correctamente',
          'success'
        );

        this.dialogRef.close()
      },
      error:(e)=>{
        this.alertaService.mensajeError(e);

      },
      complete: () => {

      },
    });
  }

  getFileDetails(e:any){

    for (var i = 0; i < e.target.files.length; i++) {
      this.filestatus=true
      var name = e.target.files[i].name;
      this.nombrefile=name;
      var type = e.target.files[i].type;
      var size = e.target.files[i].size;
      var modifiedDate = e.target.files[i].lastModifiedDate;
      var extencion=name.split('.')[name.split('.').length-1]
      if( Math.round((size/1024)/1024)>20){
        this.fileErrorMsg='El tamaño del archivo no debe superar los 20 MB'
        this.filestatus=false
      }
      this.selectedFiles = e.target.files;
    }
    console.log( this.selectedFiles)
  }

  obtenerErrorCampoNombre(val: string) {
    var campo = this.formCategoria.get(val);
    if (campo!.hasError('required')) {
      if(val=='NombreCategoria'){
        return 'Ingresa el nombre';
      }
      if(val=='Leyenda'){
        return 'Ingresa una leyenda';
      }
      if(val=='contraNuevaRepeat'){
        return 'Confirma tu nueva contraseña';
      }
    }

    return '';
  }




}
