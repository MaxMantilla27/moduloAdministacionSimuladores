import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { awsPreguntaActualizarDTO, awsPreguntaDTO } from 'src/app/Models/Aws/AwsPreguntaDTO';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { AwsCategoriasService } from 'src/app/shared/Services/Aws/Aws-Categorias/aws-categorias.service';
import { AwsPreguntaService } from 'src/app/shared/Services/Aws/Aws-Pregunta/aws-pregunta.service';

@Component({
  selector: 'app-aws-modal-agregar-categoria',
  templateUrl: './aws-modal-agregar-categoria.component.html',
  styleUrls: ['./aws-modal-agregar-categoria.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AwsModalAgregarCategoriasComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AwsModalAgregarCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alertaService: AlertaService,
    private formBuilder: FormBuilder,
    private _Dominio: AwsCategoriasService
  ) { }

  loading:any
  loader:any;
  formCategoria: FormGroup = this.formBuilder.group({
    Id: [0,[Validators.required]],
    NombreCategoria: ['', [Validators.required]],
    Leyenda: ['', [Validators.required]],
    CantidadPreguntasTotales: [0,[Validators.required]],
    CantidadPreguntasExamen: [0,[Validators.required]],
    Proporcion: [0,[Validators.required]],
    TieneSubCategoria: true,
    Logo: [ new File([],''), [Validators.required]]
  });
  public nombrefile='Ningún archivo seleccionado'

  public selectedFiles?: FileList;
  public file:any;
  public filestatus=false
  public fileErrorMsg=''



  public jsonEnvio:awsPreguntaDTO = {
    Nombre: 'Prueba',
    CantidadPreguntasPorExamen: 5,
    CantidadTotal: 5,
    ImgLogo: new File([],''),
    Leyenda: 'asdas',
    Proporcion: 5,
    TieneSubCategoria: true,
  }


  public jsonActualizar:awsPreguntaActualizarDTO = {
    Id: 0,
    Nombre: 'Prueba',
    CantidadPreguntasPorExamen: 5,
    CantidadTotal: 5,
    ImgLogo:  new File([],''),
    Leyenda: 'asdas',
    Proporcion: 5,
    TieneSubCategoria: true,
  }


  ngOnInit(): void {
    console.log(this.data)
    if(this.data!=undefined)
    {
      this.formCategoria.get('Id')?.setValue(this.data[0].id)
      this.formCategoria.get('NombreCategoria')?.setValue(this.data[0].nombre)
      this.formCategoria.get('Leyenda')?.setValue(this.data[0].leyenda)
      this.formCategoria.get('CantidadPreguntasTotales')?.setValue(this.data[0].cantidadTotal)
      this.formCategoria.get('CantidadPreguntasExamen')?.setValue(this.data[0].cantidadPreguntasPorExamen)
      this.formCategoria.get('Proporcion')?.setValue(this.data[0].proporcion)
      this.formCategoria.get('TieneSubCategoria')?.setValue(this.data[0].tieneSubCategoria)
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

  Agregar(){

    if(this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.jsonEnvio.ImgLogo = file;
      }
    }

    this.jsonEnvio.Nombre = this.formCategoria.get('NombreCategoria')?.value
    this.jsonEnvio.Leyenda = this.formCategoria.get('Leyenda')?.value
    this.jsonEnvio.CantidadPreguntasPorExamen = this.formCategoria.get('CantidadPreguntasExamen')?.value
    this.jsonEnvio.CantidadTotal= this.formCategoria.get('CantidadPreguntasTotales')?.value
    // this.jsonEnvio.Proporcion = this.formCategoria.get('Proporcion')?.value
    // this.jsonEnvio.TieneSubCategoria = this.formCategoria.get('TieneSubCategoria')?.value


    console.log(this.jsonEnvio)

    this._Dominio.AgregarCategoria(this.jsonEnvio).subscribe({

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
    this.jsonActualizar.Leyenda = this.formCategoria.get('Leyenda')?.value
    this.jsonActualizar.CantidadPreguntasPorExamen = this.formCategoria.get('CantidadPreguntasExamen')?.value
    this.jsonActualizar.CantidadTotal= this.formCategoria.get('CantidadPreguntasTotales')?.value
    this.jsonActualizar.Proporcion = this.formCategoria.get('Proporcion')?.value
    this.jsonActualizar.TieneSubCategoria = this.formCategoria.get('TieneSubCategoria')?.value

    console.log(this.jsonActualizar)

    this._Dominio.ActualizarCategoria(this.jsonActualizar).subscribe({

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


}
