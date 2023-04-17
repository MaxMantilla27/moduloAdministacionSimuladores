import { Component, Inject, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetallePreguntaDTO, TogEnvioFilePreguntaActualizarDTO, TogEnvioFilePreguntaNivel1DTO, TogEnvioRespuestaNivel1DTO,TogEnvioFilePreguntaNivel2DTO, TogEnvioRespuestaNivel2DTO} from 'src/app/Models/Tog/TogPreguntaDTO';
import { AlertaService } from 'src/app/shared/Services/Alerta/alerta.service';
import { TogCategoriasService } from 'src/app/shared/Services/Tog/Tog-Categorias/tog-categorias.service';
import { TogPreguntaService } from 'src/app/shared/Services/Tog/Tog-Pregunta/tog-pregunta.service';
import { TogPreguntaRespuestaService } from 'src/app/shared/Services/Tog/Tog-Pregunta-Respuesta/tog-pregunta-respuesta.service';
import { TogTareaService } from 'src/app/shared/Services/Tog/Tog-Tarea/tog-tarea.service';
import Swal from 'sweetalert2';
import { TogModalAlternativasComponent } from './tog-modal-alternativas/tog-modal-alternativas.component';
import { TogModalAlternativasNivelDosComponent } from './tog-modal-alternativas-nivel-dos/tog-modal-alternativas-nivel-dos.component';

@Component({
  selector: 'app-tog-modal-agregar-preguntas',
  templateUrl: './tog-modal-agregar-preguntas.component.html',
  styleUrls: ['./tog-modal-agregar-preguntas.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TogModalAgregarPreguntasComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TogModalAgregarPreguntasComponent>,
    private _Categorias: TogCategoriasService,
    private _Tareas: TogTareaService,
    private _alternativa: TogPreguntaRespuestaService,
    private _pregunta: TogPreguntaService,
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
  public dataPregunta = this.data
  public jsonNivel1: TogEnvioFilePreguntaNivel1DTO = {
    Id: 0,
    IdSimuladorTogDominio: 0,
    IdSimuladorTogTarea: 0,
    IdSimuladorTogNivel: 0,
    IdSimuladorTipoRespuesta: 0,
    Enunciado: '',
    UrlImagenPreguntaArchivo: new File([], ''),
    IdTogTipoPreguntaClasificacion: 0,
    TieneRetroalimentacionUnica: true,
    UrlRetroalimentacionVideo: '',
    Retroalimentacion: '',
    ImgRetroalimentacionArchivo: new File([], ''),
    Respuestas: [],
  };
  public jsonNivel2: TogEnvioFilePreguntaNivel2DTO = {
    Id: 0,
    IdSimuladorTogDominio: 0,
    IdSimuladorTogTarea: 0,
    IdSimuladorTogNivel: 0,
    IdSimuladorTipoRespuesta: 0,
    Enunciado: '',
    UrlImagenPreguntaArchivo: new File([], ''),
    IdTogTipoPreguntaClasificacion: 0,
    TieneRetroalimentacionUnica: true,
    UrlRetroalimentacionVideo: '',
    Retroalimentacion: '',
    ImgRetroalimentacionArchivo: new File([], ''),
    Respuestas: [],
  };
  public jsonActualizar: TogEnvioFilePreguntaActualizarDTO = {
    Id: 0,
    IdSimuladorTogDominio: 0,
    IdSimuladorTogTarea: 0,
    IdSimuladorTogNivel: 0,
    IdSimuladorTipoRespuesta: 0,
    Enunciado: '',
    UrlImagenPreguntaArchivo: new File([], ''),
    IdTogTipoPreguntaClasificacion: 0,
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
  public listaNivel:any;
  public listaCategoriasNivel:any;
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
    idSimuladorTogDominio:0,
    idSimuladorTogTarea:0,
    idSimuladorTipoRespuesta:0,
    enunciado:'',
    urlImagenPregunta:'',
    tieneRetroalimentacionUnica:false,
    tieneRetroalimentacion:false,
    urlRetroalimentacionVideo:'',
    imgRetroalimentacion:'',
    retroalimentacion:'',
    idTogTipoPreguntaClasificacion:0
  };
  public formPregunta :FormGroup=new FormGroup({
    Id:new FormControl(0,Validators.required),
    IdCategoria:new FormControl(0,Validators.required),
    IdNivel:new FormControl(0,Validators.required),
    IdTipoRespuesta:new FormControl(0,Validators.required),
    Enunciado:new FormControl('',Validators.required),
    ImagenPregunta:new FormControl(''),
    Alternativas:new FormControl(null,),
    TieneRetroalimentacionUnica:new FormControl(''),
    UrlVideo:new FormControl('',),
    Retroalimentacion :new FormControl(''),
    ImgPreguntaRetroalimentacion:new FormControl('',)
  })
  public IdNivel=0;
  public IdNivelNuevo=0;
  ngOnInit(): void {
    console.log(this.data);
    console.log(this.isNew);
    this.IdNivel=this.data[2]
    this.ObtenerComboCategorias();
  }
  ObtenerDetallePregunta(){
    if (this.data[1] != undefined) {
      console.log(this.data[1]);
      this._pregunta.ObtenerTogPregunta(this.data[1]).subscribe({
        next: (x: any) => {
          console.log(x)
          this.DetallePregunta = x;
          console.log(this.DetallePregunta)
          this.formPregunta.patchValue({
            Id:x.id,
            IdCategoria:x.idSimuladorTogDominio,
            IdNivel:x.idSimuladorTogNivel,
            IdTipoRespuesta:x.idSimuladorTipoRespuesta,
            Enunciado:x.enunciado,
            // ImagenPregunta: null,
            // Alternativas:[]
            TieneRetroalimentacionUnica:x.tieneRetroalimentacionUnica,
            UrlVideo:x.urlRetroalimentacionVideo,
            Retroalimentacion:x.retroalimentacion,
            // ImgPreguntaRetroalimentacion:undefined
          })
          console.log(this.formPregunta)
          this.FiltrarCategorias();
        },
      });
    }
    console.log(this.listaCategorias)
  }
  Cancelar() {
    this.dialogRef.close();
  }

  AgregarNuevaPregunta() {
    var IdNivel = this.formPregunta.get('IdNivel')?.value;
    if(IdNivel==1){
      //Imagen de Pregunta
    if(this.selectedFilesPregunta){
      const file: File | null = this.selectedFilesPregunta.item(0);
      if (file) {
        this.jsonNivel1.UrlImagenPreguntaArchivo = file;
      }
    }
    this.jsonNivel1.Id = 0;
    this.jsonNivel1.IdTogTipoPreguntaClasificacion = 2;
    this.jsonNivel1.IdSimuladorTogDominio = this.formPregunta.get('IdCategoria')?.value;
    this.jsonNivel1.IdSimuladorTogTarea = this.formPregunta.get('IdCategoria')?.value;
    this.jsonNivel1.IdSimuladorTogNivel = this.formPregunta.get('IdNivel')?.value;
    this.jsonNivel1.IdSimuladorTipoRespuesta = this.formPregunta.get('IdTipoRespuesta')?.value;
    this.jsonNivel1.Enunciado = this.formPregunta.get('Enunciado')?.value;
    this.jsonNivel1.TieneRetroalimentacionUnica = this.TieneRetroalimentacionUnica;
    if(this.TieneRetroalimentacionUnica==true){
      this.jsonNivel1.UrlRetroalimentacionVideo = this.formPregunta.get('UrlVideo')?.value;
      this.jsonNivel1.Retroalimentacion = this.formPregunta.get('Retroalimentacion')?.value;
      //Imagen de Retroalimentación
      if(this.selectedFilesPreguntaRetroalimentacion){
        const file: File | null = this.selectedFilesPreguntaRetroalimentacion.item(0);
        if (file) {
          this.jsonNivel1.ImgRetroalimentacionArchivo = file;
        }
      }
    }
    else{
      this.jsonNivel1.UrlRetroalimentacionVideo = '';
      this.jsonNivel1.Retroalimentacion = ''
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
      var alternativas: TogEnvioRespuestaNivel1DTO = {
        Id: 0,
        IdSimuladorTogPregunta: 0,
        Respuesta: e.Respuesta,
        Valor: e.Valor,
        Correcto: e.Correcto,
        Puntaje: e.Puntaje,
        UrlRetroalimentacionVideo: e.UrlRetroalimentacionVideo,
        Explicacion: e.Retroalimentacion,
        UrlImagenArchivo: e.UrlImagenArchivo
      };
      this.jsonNivel1.Respuestas.push(alternativas);
    });
    console.log(this.jsonNivel1.Respuestas)
    console.log(this.jsonNivel1)
    this._pregunta.AgregarPreguntaNivel1(this.jsonNivel1).subscribe({
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
    else{
      //Imagen de Pregunta
    if(this.selectedFilesPregunta){
      const file: File | null = this.selectedFilesPregunta.item(0);
      if (file) {
        this.jsonNivel2.UrlImagenPreguntaArchivo = file;
      }
    }
    this.jsonNivel2.Id = 0;
    this.jsonNivel2.IdTogTipoPreguntaClasificacion = 2;
    this.jsonNivel2.IdSimuladorTogDominio = this.formPregunta.get('IdCategoria')?.value;
    this.jsonNivel2.IdSimuladorTogTarea = this.formPregunta.get('IdCategoria')?.value;
    this.jsonNivel2.IdSimuladorTogNivel = this.formPregunta.get('IdNivel')?.value;
    this.jsonNivel2.IdSimuladorTipoRespuesta = this.formPregunta.get('IdTipoRespuesta')?.value;
    this.jsonNivel2.Enunciado = this.formPregunta.get('Enunciado')?.value;
    this.jsonNivel2.TieneRetroalimentacionUnica = this.TieneRetroalimentacionUnica;
    if(this.TieneRetroalimentacionUnica==true){
      this.jsonNivel2.UrlRetroalimentacionVideo = this.formPregunta.get('UrlVideo')?.value;
      this.jsonNivel2.Retroalimentacion = this.formPregunta.get('Retroalimentacion')?.value;
      //Imagen de Retroalimentación
      if(this.selectedFilesPreguntaRetroalimentacion){
        const file: File | null = this.selectedFilesPreguntaRetroalimentacion.item(0);
        if (file) {
          this.jsonNivel2.ImgRetroalimentacionArchivo = file;
        }
      }
    }
    else{
      this.jsonNivel2.UrlRetroalimentacionVideo = '';
      this.jsonNivel2.Retroalimentacion = ''
    }
    console.log(this.listaAlternativas)
    this.listaAlternativas.forEach((e: any) => {
      if(e.UrlRetroalimentacionVideo==undefined){
        e.UrlRetroalimentacionVideo='';
      }
      if(e.Retroalimentacion==undefined){
        e.Retroalimentacion='';
      }
      var alternativas: TogEnvioRespuestaNivel2DTO = {
        Id: 0,
        IdSimuladorTogPregunta: 0,
        Respuesta: e.Respuesta,
        OpcionRespuesta: e.OpcionRespuesta,
        Puntaje: e.Puntaje,
        UrlRetroalimentacionVideo: e.UrlRetroalimentacionVideo,
        Explicacion: e.Retroalimentacion,
        UrlImagenArchivo: e.UrlImagenArchivo
      };
      this.jsonNivel2.Respuestas.push(alternativas);
    });
    console.log(this.jsonNivel2.Respuestas)
    console.log(this.jsonNivel2)
    this._pregunta.AgregarPreguntaNivel2(this.jsonNivel2).subscribe({
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

  }
  ActualizarPregunta(){
    if(this.selectedFilesPregunta){
      const file: File | null = this.selectedFilesPregunta.item(0);
      if (file) {
        this.jsonActualizar.UrlImagenPreguntaArchivo = file;
      }
    }
    this.jsonActualizar.Id = this.formPregunta.get('Id')?.value;
    this.jsonActualizar.IdTogTipoPreguntaClasificacion = 2;
    this.jsonActualizar.IdSimuladorTogDominio = this.formPregunta.get('IdCategoria')?.value;
    this.jsonActualizar.IdSimuladorTogTarea = this.formPregunta.get('IdCategoria')?.value;
    this.jsonActualizar.IdSimuladorTogNivel = this.formPregunta.get('IdNivel')?.value;
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

  editarAlternativasTemporalNivel1(data: any,index: number) {
    var isNewAlternativa=false
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    console.log(data);
    //Editar Pregunta
    const dialogRef = this.dialog.open(TogModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data: [data,isNewAlternativa,TieneRetroalimentacionUnica, 1],
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("uno")
      this.ObtenerAlternativa();

      console.log(result);
      Object.assign(this.listaAlternativas[index], result);
      //this.listaAlternativas[index]=result
      console.log(this.listaAlternativas)
    });
  }
  editarAlternativasTemporalNivel2(data: any,index: number) {
    var isNewAlternativa=false
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    console.log(data);
    //Editar Pregunta
    const dialogRef = this.dialog.open(TogModalAlternativasNivelDosComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data: [data,isNewAlternativa,TieneRetroalimentacionUnica, 1],
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("uno")
      this.ObtenerAlternativa();

      console.log(result);
      Object.assign(this.listaAlternativas[index], result);
      //this.listaAlternativas[index]=result
      console.log(this.listaAlternativas)
    });
  }

  editarAlternativasNivel1(data: any, index: number) {
    var isNewAlternativa=false
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    console.log(data);
    const dialogRef = this.dialog.open(TogModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data: [data,isNewAlternativa,TieneRetroalimentacionUnica],
    });
    dialogRef.afterClosed().subscribe((Recargar: boolean) => {
      this.ObtenerAlternativa();
      if(Recargar==true){
        this.ObtenerAlternativa();
      }
    });
  }
  editarAlternativasNivel2(data: any, index: number) {
    var isNewAlternativa=false
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    console.log(data);
    const dialogRef = this.dialog.open(TogModalAlternativasNivelDosComponent, {
      panelClass: 'dialog-abrir-alternativa-nivel-dos',
      data: [data,isNewAlternativa,TieneRetroalimentacionUnica],
    });
    dialogRef.afterClosed().subscribe((Recargar: boolean) => {
      this.ObtenerAlternativa();
      if(Recargar==true){
        this.ObtenerAlternativa();
      }
    });
  }

  ObtenerComboCategorias() {
    this._Categorias.ObtenerComboCategorias().subscribe({
      next: (x: any) => {
        this.listaCategorias = x.categorias;
        this.listaNivel = x.nivel;
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
    console.log(this.data)
    if (this.data[1] != undefined) {
      console.log(this.data[1]);
      if(this.data[2]==1){
        this._alternativa.ObtenerAlternativaNivel1(this.data[1]).subscribe({
          next: (x: any) => {
            this.listaAlternativas = x;
            console.log(x);
          },
        });
      }
      if(this.data[2]==2){
        this._alternativa.ObtenerAlternativaNivel2(this.data[1]).subscribe({
          next: (x: any) => {
            this.listaAlternativas = x;
            console.log(x);
          },
        });
      }
    }
  }

  FiltrarCategorias() {
    this.listaCategoriasNivel = [];
    var idNivel = this.formPregunta.get('IdNivel')?.value
    this.IdNivelNuevo = this.formPregunta.get('IdNivel')?.value
    // if(this.listaCategorias!=undefined){
      console.log(idNivel)
      console.log(this.listaCategorias)
      this.listaCategorias.forEach((ss: any) => {
        if (ss.idSimuladorTogNivel == idNivel) {
          this.listaCategoriasNivel.push(ss);
        }
      });
    // }
    console.log(this.listaCategoriasNivel);
  }
  agregarNuevaAlternativa() {
    if(this.IdNivelNuevo!=0){
      var isNewAlternativa=true
      console.log(this.IdNivelNuevo)
    if(this.IdNivelNuevo==1){
      //Editar Pregunta
    var isNewAlternativa=true
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    const dialogRef = this.dialog.open(TogModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data:[undefined,isNewAlternativa,TieneRetroalimentacionUnica,this.data[1] ]
    });

    this.valorAgregado = false;
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("tres")

      console.log(result);
      this.listaAlternativasAnterior = this.listaAlternativas;
      console.log(this.listaAlternativasAnterior);
      console.log(this.listaAlternativas);
      if (result != undefined) {
        console.log(result)
        this.valorAgregado = true;
       this.listaAlternativas.push(result);
        Object.assign(result, result);
        console.log(this.listaAlternativas);
      }
      this.valorAgregado = true;
      this.ObtenerAlternativa();
    });
    }
    if(this.IdNivelNuevo==2){
      //Editar Pregunta
    var isNewAlternativa=true
    var TieneRetroalimentacionUnica=this.TieneRetroalimentacionUnica
    const dialogRef = this.dialog.open(TogModalAlternativasNivelDosComponent, {
      panelClass: 'dialog-abrir-alternativa-nivel-dos',
      data:[undefined,isNewAlternativa,TieneRetroalimentacionUnica,this.data[1] ]
    });

    this.valorAgregado = false;
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("tres")

      console.log(result);
      this.listaAlternativasAnterior = this.listaAlternativas;
      console.log(this.listaAlternativasAnterior);
      console.log(this.listaAlternativas);
      if (result != undefined) {
        console.log(result)
        this.valorAgregado = true;
       this.listaAlternativas.push(result);
        Object.assign(result, result);
        console.log(this.listaAlternativas);
      }
      this.valorAgregado = true;
      this.ObtenerAlternativa();
    });
    }

    }
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
        this.EliminarPreguntaRespuestaTog(IdRespuesta,this.IdNivelNuevo);
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
  EliminarPreguntaRespuestaTog(IdRespuesta:number,IdNivel:number){
    console.log(this.IdNivel)
    this._alternativa.EliminarPreguntaRespuestaTog(IdRespuesta,IdNivel).subscribe({
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
