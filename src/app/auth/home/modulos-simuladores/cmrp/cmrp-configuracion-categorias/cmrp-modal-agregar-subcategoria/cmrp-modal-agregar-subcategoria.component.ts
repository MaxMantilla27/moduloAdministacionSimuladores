import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CmrpActualizarTareaDTO, CmrpAgregarTareaDTO } from 'src/app/Models/Cmrp/CmrpTareaDTO';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { CmrpCategoriasService } from 'src/app/shared/Services/Cmrp/Cmrp-Categorias/cmrp-categorias.service';
import { CmrpTareaService } from 'src/app/shared/Services/Cmrp/Cmrp-Tarea/cmrp-tarea.service';

@Component({
  selector: 'app-cmrp-modal-agregar-subcategoria',
  templateUrl: './cmrp-modal-agregar-subcategoria.component.html',
  styleUrls: ['./cmrp-modal-agregar-subcategoria.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CmrpModalAgregarSubcategoriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CmrpModalAgregarSubcategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private alertaService: AlertaService,
    private _Tarea: CmrpTareaService,
    private _Categorias: CmrpCategoriasService,
) {}

formSubCategoria: FormGroup = this.formBuilder.group({
  Id: [0],
  NombreCategoria: ['', [Validators.required]],
  IdCategoria:[0,[Validators.required]],
  CantidadPreguntasTotales: [0,[Validators.required]],
  CantidadPreguntasExamen: [0,[Validators.required]],
  // Proporcion: [0,[Validators.required]],
  Logo: new File([],'')
});
public nombrefile='Ningún archivo seleccionado'
public selectedFiles?: FileList;
public file:any;
public filestatus=false
public fileErrorMsg=''
public listaComboCategorias:any;
public jsonEnvio:CmrpAgregarTareaDTO = {
  IdSimuladorCmrpDominio:0 ,
  Nombre: '',
  CantidadPreguntasPorExamen: 0,
  CantidadTotal:0,
  ImgLogo: new File([],''),
  // Proporcion: 0,
}
public jsonActualizar:CmrpActualizarTareaDTO = {
  Id:0,
  IdSimuladorCmrpDominio: 0,
  Nombre: '',
  CantidadPreguntasPorExamen: 0,
  CantidadTotal: 0,
  ImgLogo: new File([],''),
  // Proporcion: 0,
}
  ngOnInit(): void {
    this.ObtenerComboCategorias()
    if(this.data!=undefined)
    {
      this.formSubCategoria.get('Id')?.setValue(this.data[0].id)
      this.formSubCategoria.get('NombreCategoria')?.setValue(this.data[0].nombre)
      this.formSubCategoria.get('IdCategoria')?.setValue(this.data[0].idSimuladorCmrpDominio)
      this.formSubCategoria.get('CantidadPreguntasTotales')?.setValue(this.data[0].cantidadTotal)
      this.formSubCategoria.get('CantidadPreguntasExamen')?.setValue(this.data[0].cantidadPreguntasPorExamen)
      // this.formSubCategoria.get('Proporcion')?.setValue(this.data[0].proporcion)
      this.formSubCategoria.get('Logo')?.setValue(this.data[0].imgLogo)
      console.log(this.formSubCategoria)
    }
    else{
      this.formSubCategoria.reset();
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
    this.jsonEnvio.Nombre = this.formSubCategoria.get('NombreCategoria')?.value
    this.jsonEnvio.IdSimuladorCmrpDominio = this.formSubCategoria.get('IdCategoria')?.value
    this.jsonEnvio.CantidadPreguntasPorExamen = this.formSubCategoria.get('CantidadPreguntasExamen')?.value
    this.jsonEnvio.CantidadTotal= this.formSubCategoria.get('CantidadPreguntasTotales')?.value
    // this.jsonEnvio.Proporcion = this.formSubCategoria.get('Proporcion')?.value
    this._Tarea.AgregarSubCategoria(this.jsonEnvio).subscribe({
      next: (x) => {
        this.alertaService.mensajeIcon(
          'Aviso',
          'La subcategoría se agrego correctamente',
          'success'
        );
      },
      error:(e)=>{
        this.alertaService.mensajeError(e);
      },
      complete: () => {
        this.dialogRef.close()
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
    this.jsonActualizar.Nombre = this.formSubCategoria.get('NombreCategoria')?.value
    this.jsonActualizar.IdSimuladorCmrpDominio = this.formSubCategoria.get('IdCategoria')?.value
    this.jsonActualizar.CantidadPreguntasPorExamen = this.formSubCategoria.get('CantidadPreguntasExamen')?.value
    this.jsonActualizar.CantidadTotal= this.formSubCategoria.get('CantidadPreguntasTotales')?.value
    // this.jsonActualizar.Proporcion = this.formSubCategoria.get('Proporcion')?.value
    this._Tarea.ActualizarSubCategoria(this.jsonActualizar).subscribe({
      next: (x) => {
        this.alertaService.mensajeIcon(
          'Aviso',
          'La subcategoría se actualizo correctamente',
          'success'
        );
      },
      error:(e)=>{
        this.alertaService.mensajeError(e);
      },
      complete: () => {
        this.dialogRef.close()
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
