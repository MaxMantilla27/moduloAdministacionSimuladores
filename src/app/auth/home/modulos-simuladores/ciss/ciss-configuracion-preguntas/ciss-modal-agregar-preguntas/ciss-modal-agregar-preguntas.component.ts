import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CissEnvioFilePreguntaActualizarDTO, CissEnvioFilePreguntaDTO, CissEnvioRespuesDTO, DetallePreguntaDTO } from 'src/app/Models/Ciss/CissPreguntaDTO';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { CissCategoriasService } from 'src/app/shared/Services/Ciss/Ciss-Categorias/ciss-categorias.service';
import { CissPreguntaService } from 'src/app/shared/Services/Ciss/Ciss-Pregunta/ciss-pregunta.service';
import { CissPreguntaRespuestaService } from 'src/app/shared/Services/Ciss/Ciss-PreguntaRespuesta/ciss-pregunta-respuesta.service';
import { CissTareaService } from 'src/app/shared/Services/Ciss/Ciss-Tarea/ciss-tarea.service';
import Swal from 'sweetalert2';
import { CissModalAlternativasComponent } from './ciss-modal-alternativas/ciss-modal-alternativas.component';

@Component({
  selector: 'app-ciss-modal-agregar-preguntas',
  templateUrl: './ciss-modal-agregar-preguntas.component.html',
  styleUrls: ['./ciss-modal-agregar-preguntas.component.scss']
})
export class CissModalAgregarPreguntasComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CissModalAgregarPreguntasComponent>,
    private _Categorias: CissCategoriasService,
    private _Tareas: CissTareaService,
    private _alternativa: CissPreguntaRespuestaService,
    private _pregunta: CissPreguntaService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public alertaService:AlertaService,
  ) {
  }


  displayedColumns = [
    'id',
    'alternativa',
    'correcto',
    'puntaje',
    'retroalimentacion',
    'acciones',
  ];

  loading: any;
  loader: any;
  public show: boolean = false;
  public json: CissEnvioFilePreguntaDTO = {
    Id: 0,
    IdSimuladorCissDominio: 0,
    IdSimuladorCissTarea: 0,
    IdSimuladorTipoRespuesta: 0,
    Enunciado: '',
    UrlImagenPreguntaArchivo: new File([], ''),
    IdCissTipoPreguntaClasificacion: 0,
    TieneRetroalimentacionUnica: true,
    UrlRetroalimentacionVideo: '',
    Retroalimentacion: '',
    ImgRetroalimentacionArchivo: new File([], ''),
    Respuestas: [],
  };
  public jsonActualizar: CissEnvioFilePreguntaActualizarDTO = {
    Id: 0,
    IdSimuladorCissDominio: 0,
    IdSimuladorCissTarea: 0,
    IdSimuladorTipoRespuesta: 0,
    Enunciado: '',
    UrlImagenPreguntaArchivo: new File([], ''),
    IdCissTipoPreguntaClasificacion: 0,
    TieneRetroalimentacionUnica: true,
    UrlRetroalimentacionVideo: '',
    Retroalimentacion: '',
    ImgRetroalimentacionArchivo: new File([], ''),
  };
  public TieneRetroalimentacionUnica = true;
  public datasource: any;
  public listaCategorias: any;
  public listaSubCategorias: any;
  public listaTipoPregunta: any;
  public listaPregunta: any;
  public lisSubCategoriaPorCategoria: Array<any> = [];
  public categoria: any;
  public subcategoria: any;
  public tipoPregunta: any;
  public idDominio: 0;
  public listaAlternativas: any = [];
  public isNew = this.data[0];
  public listaAlternativasAnterior: any[];
  public valorAgregado = true;
  envio: any = [
    {
      idDominio: 0,
    },
  ];
  public selectedFilesPregunta?: FileList;
  public filePregunta: any;
  public filestatusPregunta = false;
  public fileErrorMsgPregunta = '';
  public nombrefilePregunta = 'Ningún archivo seleccionado';

  public selectedFilesPreguntaRetroalimentacion?: FileList;
  public filePreguntaRetroalimentacion: any;
  public filestatusPreguntaRetroalimentacion = false;
  public fileErrorMsgPreguntaRetroalimentacion = '';
  public nombrefilePreguntaRetroalimentacion = 'Ningún archivo seleccionado';

  public DetallePregunta:DetallePreguntaDTO={
    id:0,
    idAspenetUsers:'',
    idSimuladorCissDominio:0,
    idSimuladorCissTarea:0,
    idSimuladorTipoRespuesta:0,
    enunciado:'',
    urlImagenPregunta:'',
    tieneRetroalimentacionUnica:false,
    tieneRetroalimentacion:false,
    urlRetroalimentacionVideo:'',
    imgRetroalimentacion:'',
    retroalimentacion:'',
    idCissTipoPreguntaClasificacion:0
  };
  public formPregunta :FormGroup=new FormGroup({
    Id:new FormControl(0,Validators.required),
    IdCategoria:new FormControl(0,Validators.required),
    IdSubCategoria:new FormControl(0,Validators.required),
    IdTipoRespuesta:new FormControl(0,Validators.required),
    Enunciado:new FormControl('',Validators.required),
    ImagenPregunta:new FormControl(''),
    Alternativas:new FormControl(null,),
    TieneRetroalimentacionUnica:new FormControl(''),
    UrlVideo:new FormControl('',),
    Retroalimentacion :new FormControl(''),
    ImgPreguntaRetroalimentacion:new FormControl('',)
  })

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.isNew);
    this.ObtenerComboCategorias();
  }
  ObtenerDetallePregunta(){
    if (this.data[1] != undefined) {
      console.log(this.data[1]);
      this._pregunta.ObtenerCissPregunta(this.data[1].id).subscribe({
        next: (x: any) => {
          console.log(x)
          this.DetallePregunta = x;
          console.log(this.DetallePregunta)
          this.formPregunta.patchValue({
            Id:x[0].id,
            IdCategoria:x[0].idSimuladorCissDominio,
            IdSubCategoria:x[0].idSimuladorCissTarea,
            IdTipoRespuesta:x[0].idSimuladorTipoRespuesta,
            Enunciado:x[0].enunciado,
            // ImagenPregunta: null,
            // Alternativas:[]
            TieneRetroalimentacionUnica:x[0].tieneRetroalimentacionUnica,
            UrlVideo:x[0].urlRetroalimentacionVideo,
            Retroalimentacion:x[0].retroalimentacion,
            // ImgPreguntaRetroalimentacion:undefined
          })
          console.log(this.formPregunta)
          this.FiltrarSubCategoritas();
        },
      });
    }
    console.log(this.listaCategorias)
  }
  Cancelar() {
    this.dialogRef.close();
  }

  AgregarNuevaPregunta() {
    //Imagen de Pregunta
    if(this.selectedFilesPregunta){
      const file: File | null = this.selectedFilesPregunta.item(0);
      if (file) {
        this.json.UrlImagenPreguntaArchivo = file;
      }
    }
    this.json.Id = 0;
    this.json.IdCissTipoPreguntaClasificacion = 2;
    this.json.IdSimuladorCissDominio = this.formPregunta.get('IdCategoria')?.value;
    this.json.IdSimuladorCissTarea = this.formPregunta.get('IdCategoria')?.value;
    this.json.IdSimuladorTipoRespuesta = this.formPregunta.get('IdTipoRespuesta')?.value;
    this.json.Enunciado = this.formPregunta.get('Enunciado')?.value;
    this.json.TieneRetroalimentacionUnica = this.TieneRetroalimentacionUnica;
    if(this.TieneRetroalimentacionUnica==true){
      this.json.UrlRetroalimentacionVideo = this.formPregunta.get('UrlVideo')?.value;
      this.json.Retroalimentacion = this.formPregunta.get('Retroalimentacion')?.value;
      //Imagen de Retroalimentación
      if(this.selectedFilesPreguntaRetroalimentacion){
        const file: File | null = this.selectedFilesPreguntaRetroalimentacion.item(0);
        if (file) {
          this.json.ImgRetroalimentacionArchivo = file;
        }
      }
    }
    else{
      this.json.UrlRetroalimentacionVideo = '';
      this.json.Retroalimentacion = ''
    }
    console.log(this.listaAlternativas)
    this.listaAlternativas.forEach((e: any) => {
      if(e.Correcto == true){
        e.Valor = 1
      }
      else{
        e.Valor = 0
      }
      if(e.UrlRetroalimentacionVideo==undefined){
        e.UrlRetroalimentacionVideo='';
      }
      if(e.Retroalimentacion==undefined){
        e.Retroalimentacion='';
      }
      var alternativas: CissEnvioRespuesDTO = {
        Id: 0,
        IdSimuladorCissPregunta: 0,
        Respuesta: e.Respuesta,
        Valor: e.Valor,
        Correcto: e.Correcto,
        Puntaje: e.Puntaje,
        UrlRetroalimentacionVideo: e.UrlRetroalimentacionVideo,
        Explicacion: e.Retroalimentacion,
        UrlImagenArchivo: e.UrlImagenArchivo
      };
      this.json.Respuestas.push(alternativas);
    });
    console.log(this.json.Respuestas)
    console.log(this.json)
    this._pregunta.AgregarPregunta(this.json).subscribe({
      next: (x:any) => {
        console.log(x)
      },
      error: (error:any) => {
      },
      complete: () => {
        this.dialogRef.close(true);
        this.mensajeExitoso();
        this.listaAlternativas=undefined;
      },
    })
  }
  ActualizarPregunta(){
    if(this.selectedFilesPregunta){
      const file: File | null = this.selectedFilesPregunta.item(0);
      if (file) {
        this.jsonActualizar.UrlImagenPreguntaArchivo = file;
      }
    }
    this.jsonActualizar.Id = this.formPregunta.get('Id')?.value;
    this.jsonActualizar.IdCissTipoPreguntaClasificacion = 2;
    this.jsonActualizar.IdSimuladorCissDominio = this.formPregunta.get('IdCategoria')?.value;
    this.jsonActualizar.IdSimuladorCissTarea = this.formPregunta.get('IdCategoria')?.value;
    this.jsonActualizar.IdSimuladorTipoRespuesta = this.formPregunta.get('IdTipoRespuesta')?.value;
    this.jsonActualizar.Enunciado = this.formPregunta.get('Enunciado')?.value;
    this.jsonActualizar.TieneRetroalimentacionUnica = this.TieneRetroalimentacionUnica;
    if(this.TieneRetroalimentacionUnica==true){
      this.jsonActualizar.UrlRetroalimentacionVideo = this.formPregunta.get('UrlVideo')?.value;
      this.jsonActualizar.Retroalimentacion = this.formPregunta.get('Retroalimentacion')?.value;
      //Imagen de Retroalimentación
      if(this.selectedFilesPreguntaRetroalimentacion){
        const file: File | null = this.selectedFilesPreguntaRetroalimentacion.item(0);
        if (file) {
          this.jsonActualizar.ImgRetroalimentacionArchivo = file;
        }
      }
    }
    else{
      this.jsonActualizar.UrlRetroalimentacionVideo = '';
      this.jsonActualizar.Retroalimentacion = ''
    }
    this._pregunta.ActualizarPregunta(this.jsonActualizar).subscribe({
      next: (x:any) => {
        console.log(x)
      },
      error: (error:any) => {
      },
      complete: () => {
        this.dialogRef.close(true);
        this.mensajeExitoso();
        this.listaAlternativas=undefined;
      },
    })
  }

  seleccionar(e: any) {
    console.log(e);
    console.log(e.value);
    this.idDominio = e.value;

    // this.ObtenerComboSubcategoria()
  }

  editarAlternativasTemporal(data: any,index: number) {
    var isNewAlternativa=false
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    console.log(data);
    //Editar Pregunta
    const dialogRef = this.dialog.open(CissModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data: [data,isNewAlternativa,TieneRetroalimentacionUnica],
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      Object.assign(this.listaAlternativas[index], result);
      //this.listaAlternativas[index]=result
      console.log(this.listaAlternativas)
    });
  }

  editarAlternativas(data: any, index: number) {
    var isNewAlternativa=false
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    console.log(data);
    const dialogRef = this.dialog.open(CissModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data: [data,isNewAlternativa,TieneRetroalimentacionUnica],
    });
    dialogRef.afterClosed().subscribe((Recargar: boolean) => {
      if(Recargar==true){
        this.ObtenerAlternativa();
      }
    });
  }

  ObtenerComboCategorias() {
    this._Categorias.ObtenerComboCategorias().subscribe({
      next: (x: any) => {
        this.listaCategorias = x.categorias;
        this.listaSubCategorias = x.subCategorias;
        this.listaTipoPregunta = x.tipoRespuesta;
        console.log(x);
      },
      error: (error:any) => {
      },
      complete: () => {
        if(this.data[1]!=0){
          this.ObtenerDetallePregunta();
          this.ObtenerAlternativa();
        }
      },
    });
  }


  ObtenerAlternativa() {
    if (this.data[1] != undefined) {
      console.log(this.data[1]);
      this._alternativa.ObtenerAlternativa(this.data[1].id).subscribe({
        next: (x: any) => {
          this.listaAlternativas = x;
          console.log(x);
        },
      });
    }
  }

  FiltrarSubCategoritas() {
    this.lisSubCategoriaPorCategoria = [];
    var idcat = this.formPregunta.get('IdCategoria')?.value
    console.log(idcat);
    console.log(this.listaCategorias)
    console.log(this.listaSubCategorias)
    // if(this.listaCategorias!=undefined){
      this.listaSubCategorias.forEach((ss: any) => {
        if (ss.idSimuladorCissDominio == idcat) {
          this.lisSubCategoriaPorCategoria.push(ss);
        }
      });
    // }
    console.log(this.lisSubCategoriaPorCategoria);
  }

  agregarNuevaAlternativa() {
    //Editar Pregunta
    var isNewAlternativa=true
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    const dialogRef = this.dialog.open(CissModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data:[undefined,isNewAlternativa,TieneRetroalimentacionUnica]
    });

    this.valorAgregado = false;
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      this.listaAlternativasAnterior = this.listaAlternativas;
      console.log(this.listaAlternativasAnterior);
      console.log(this.listaAlternativas);
      if (result != undefined) {
        this.valorAgregado = true;
        this.listaAlternativas.push(result);
        console.log(this.listaAlternativas);
      }
      this.valorAgregado = true;
    });
  }

  getFileDetailsPregunta(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.filestatusPregunta = true;
      var name = event.target.files[i].name;
      this.nombrefilePregunta = name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;
      var extencion = name.split('.')[name.split('.').length - 1];
      if (Math.round(size / 1024 / 1024) > 150) {
        this.fileErrorMsgPregunta = 'El tamanio del archivo no debe superar los 25 MB';
        this.filestatusPregunta = false;
      }
      this.selectedFilesPregunta = event.target.files;
      console.log(this.selectedFilesPregunta)
    }
  }
  getFileDetailsPreguntaRetroalimentacion(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.filestatusPreguntaRetroalimentacion = true;
      var name = event.target.files[i].name;
      this.nombrefilePreguntaRetroalimentacion = name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;
      var extencion = name.split('.')[name.split('.').length - 1];
      if (Math.round(size / 1024 / 1024) > 150) {
        this.fileErrorMsgPreguntaRetroalimentacion = 'El tamanio del archivo no debe superar los 25 MB';
        this.filestatusPreguntaRetroalimentacion = false;
      }
      this.selectedFilesPreguntaRetroalimentacion = event.target.files;
      console.log(this.selectedFilesPreguntaRetroalimentacion)
    }
  }
  mostrarMensajeEliminarPreguntaRespuestaTemporal(index: number) {
    console.log(this.listaAlternativas)
    this.valorAgregado = false;
    Swal.fire({
      title: 'Esta seguro de eliminar el registro?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4C5FC0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminalo!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(index)
        this.listaAlternativas.splice(index,1)
        console.log(this.listaAlternativas)
      }
      this.valorAgregado = true;
    });
  }
  mostrarMensajeEliminarPreguntaRespuesta(IdRespuesta: number) {
    Swal.fire({
      title: 'Está seguro de eliminar el registro?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4C5FC0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(IdRespuesta)
        this.EliminarPreguntaRespuestaCiss(IdRespuesta);
      }
    });
  }
  mensajeExitoso(mensaje?: string) {
    const Toast = Swal.mixin({
      toast: true,
      target: '#content-drawer-component',
      customClass: {
        container: 'swal2-container-integra',
      },
      position: 'top-right',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    return Toast.fire({
      icon: 'success',
      title: mensaje != null ? mensaje : 'Guardado con exito',
    });
  }
  EliminarPreguntaRespuestaCiss(IdRespuesta:number){
    this._alternativa.EliminarPreguntaRespuestaCiss(IdRespuesta).subscribe({
      next: (x: any) => {
      },
      error: (error:any) => {
        this.alertaService.notificationError(error.message);
      },
      complete: () => {
        this.ObtenerAlternativa();
        this.valorAgregado = false;
        this.alertaService.mensajeExitoso();
        this.valorAgregado = true;
      },
    });
  }

}
