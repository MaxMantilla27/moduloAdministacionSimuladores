import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { formulario } from 'src/app/Models/Formulario';
import {
  PmpEnvioFilePreguntaDTO,
  PmpEnvioRespuesDTO,
} from 'src/app/Models/Pmp/PreguntaDTO';
import { PmpCategoriasService } from 'src/app/shared/Services/Pmp/Pmp-Categorias/pmp-categorias.service';
import { PmpPreguntaService } from 'src/app/shared/Services/Pmp/Pmp-Pregunta/pmp-pregunta.service';
import { PmpPreguntaRespuestaService } from 'src/app/shared/Services/Pmp/Pmp-PreguntaRespuesta/pmp-preguntaRespuesta.service';
import { PmpTareaService } from 'src/app/shared/Services/Pmp/Pmp-Tarea/pmp-tarea.service';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';
import Swal from 'sweetalert2';
import { ModalAlternativasComponent } from './pmp-modal-alternativas/modal-alternativas.component';

@Component({
  selector: 'app-pmp-modal-agregar-preguntas',
  templateUrl: './pmp-modal-agregar-preguntas.component.html',
  styleUrls: ['./pmp-modal-agregar-preguntas.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PmpModalAgregarPreguntasComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PmpModalAgregarPreguntasComponent>,
    private _Categorias: PmpCategoriasService,
    private _Tareas: PmpTareaService,
    private _alternativa: PmpPreguntaRespuestaService,
    private _pregunta: PmpPreguntaService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { this.userForm =fb.group({
      Id:0,
      IdCategoria: ['', [Validators.required]],
      IdSubCategoria: ['', [Validators.required]],
      IdTipoRespuesta: ['', [Validators.required]],
      Enunciado: ['', [Validators.required]],
      ImagenPregunta: [''],
      Alternativas: [null],
      TieneRetroalimentacionUnica: ['', [Validators.required]],
      UrlVideo: [''],
      Retroalimentacion: [''],
      ImgPreguntaRetroalimentacion: ['']
    });
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
  public userForm: FormGroup = new FormGroup({});



  public json: PmpEnvioFilePreguntaDTO = {
    Id: 0,
    IdSimuladorPmpDominio: 0,
    IdSimuladorPmpTarea: 0,
    IdSimuladorTipoRespuesta: 0,
    Enunciado: '',
    UrlImagenPreguntaArchivo: new File([], ''),
    IdPmpTipoPreguntaClasificacion: 0,
    TieneRetroalimentacionUnica: true,
    UrlRetroalimentacionVideo: '',
    Retroalimentacion: '',
    ImgRetroalimentacionArchivo: new File([], ''),
    Respuestas: [],
  };

  datasource: any;
  listaCategorias: any;
  listaSubCategorias: any;
  listaTipoPregunta: any;
  listaPregunta: any;
  lisSubCategoriaPorCategoria: Array<any> = [];
  categoria: any;
  subcategoria: any;
  tipoPregunta: any;
  public idDominio: 0;
  listaAlternativas: any = [];
  agregarv = this.data[0];
  public listaAlternativasAnterior: any[];
  public valorAgregado = true;

  envio: any = [
    {
      idDominio: 0,
    },
  ];
  public IdCategoria = 0;
  public IdSubCategoria = 0;
  public IdTipoRespuesta = 0;
  public Enunciado = '';
  public ImagenPregunta: any;
  public TieneRetroalimentacionUnica = true;
  public UrlVideo = '';
  public Retroalimentacion = '';
  public ImgPreguntaRetroalimentacion: any;

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

  public min=0
  public max=0

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.agregarv);
    this.ObtenerComboCategorias();
    this.ObtenerAlternativa();
  }


  Cancelar() {
    this.dialogRef.close();
  }
  eliminar(){

  }
  Enviar() {

    // this.json.Id = this.formPregunta.value.Id;
    // this.json.IdSimuladorPmpTarea = this.formPregunta.value.IdSubCategoria;
    // this.json.IdSimuladorTipoRespuesta =
    //   this.formPregunta.value.IdTipoRespuesta;
    // this.json.Enunciado = this.formPregunta.value.Enunciado;
    // this.json.TieneRetroalimentacion = true;
    // this.json.UrlRetroalimentacionVideo = '';
    // this.json.Retroalimentacion = '';
    // // this.json.
    // this.json.Respuestas = [];
    // console.log(this.listaAlternativas);
    // this.listaAlternativas.forEach((e: any) => {


    //   var alternativas: PmpEnvioRespuesDTO = {

    //     Id: e.Id,
    //     IdSimuladorPmpPregunta: 0,
    //     Alternativa: e.alternativa,
    //     Valor: e.valor,
    //     Correcto: e.correcto,
    //     IdAspNetUsers: '',
    //     Puntaje: e.puntaje,
    //     UrlRetroalimentacionVideo: e.urlRetroalimentacionVideo,
    //     Imagen: this.json.Imagen,
    //     Retroalimentacion: e.retroalimentacion,
    //     UrlImagen: '',
    //   };

    //   this.json.Respuestas.push(alternativas);
    // });

    // console.log(this.json);
  }

  // ObtenerCombo() {
  //   this._Categorias.ObtenerCategorias().subscribe({
  //     next: (x: any) => {
  //       console.log(x)
  //       this.listaCategorias = x;
  //       console.log(x)
  //     },
  //   });
  // }

  AgregarNuevaPregunta() {
    if(this.selectedFilesPregunta){
      const file: File | null = this.selectedFilesPregunta.item(0);
      if (file) {
        this.json.UrlImagenPreguntaArchivo = file;
      }
    }

    if(this.selectedFilesPreguntaRetroalimentacion){
      const file: File | null = this.selectedFilesPreguntaRetroalimentacion.item(0);
      if (file) {
        this.json.ImgRetroalimentacionArchivo = file;
      }
    }

    this.json.Id = 0;
    this.json.IdSimuladorPmpDominio = this.IdCategoria;
    this.json.IdSimuladorPmpTarea = this.IdSubCategoria;
    this.json.IdSimuladorTipoRespuesta = this.IdTipoRespuesta;
    this.json.Enunciado = this.Enunciado;
    this.json.TieneRetroalimentacionUnica = this.TieneRetroalimentacionUnica;
    this.json.IdPmpTipoPreguntaClasificacion = 2;
    this.json.UrlRetroalimentacionVideo = this.UrlVideo;
    this.json.Retroalimentacion = this.Retroalimentacion;
    console.log(this.listaAlternativas);
    this.listaAlternativas.forEach((e: any) => {
      if(e.Correcto == true){
        e.Valor = 1
      }
      else{
        e.Valor = 0
      }
      var alternativas: PmpEnvioRespuesDTO = {
        Id: 0,
        IdSimuladorPmpPregunta: 0,
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

    console.log(this.json)
    // this._pregunta.AgregarPregunta(this.json).subscribe({
    //   next: (x:any) => {
    //     console.log(x)
    //   },
    //   error:(e:any)=>{


    //   },
    //   complete: () => {

    //   },
    // })

  }

  seleccionar(e: any) {
    console.log(e);
    console.log(e.value);
    this.idDominio = e.value;

    // this.ObtenerComboSubcategoria()
  }

  abrirModalAlternativas(data: any,index: number) {
    console.log(data);
    //Editar Pregunta
    const dialogRef = this.dialog.open(ModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data: [data],
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      Object.assign(this.listaAlternativas[index], result);
      //this.listaAlternativas[index]=result
      console.log(this.listaAlternativas)
    });
  }

  // ObtenerComboSubcategoria() {
  //   console.log(this.envio[0])
  //   this._Tareas.ObtenerSubcategoriaCombo(this.envio).subscribe({
  //     next: (x: any) => {
  //       this.listaSubCategorias = x;
  //       console.log(x)
  //     },
  //   });
  // }ç

  editarAlternativa(data: any, index: number) {
    console.log(data);
    const dialogRef = this.dialog.open(ModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
      data: [data],
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      Object.assign(this.listaAlternativas[index], result);
    });
  }

  ObtenerComboCategorias() {
    this._Categorias.ObtenerComboCategorias().subscribe({
      next: (x: any) => {
        this.listaCategorias = x.categorias;
        this.listaSubCategorias = x.subCategorias;
        this.listaTipoPregunta = x.tipoRespuesta;
        this.FiltrarSubs(null);
        console.log(x);
      },
    });
  }

  ObtenerAlternativa() {
    if (this.data[1] != undefined) {
      console.log(this.data[1].id);
      this._alternativa.ObtenerAlternativa(this.data[1].id).subscribe({
        next: (x: any) => {
          this.listaAlternativas = x;
          console.log(x);
        },
      });
    }
  }

  FiltrarSubs(e: any) {
    this.lisSubCategoriaPorCategoria = [];
    var idcat = this.IdCategoria
    console.log(idcat);
    this.listaSubCategorias.forEach((ss: any) => {
      if (ss.idSimuladorPmpDominio == idcat) {
        this.lisSubCategoriaPorCategoria.push(ss);
      }
    });
    console.log(this.lisSubCategoriaPorCategoria);
  }

  agregar() {
    //Editar Pregunta
    const dialogRef = this.dialog.open(ModalAlternativasComponent, {
      panelClass: 'dialog-abrir-alternativa',
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

}
