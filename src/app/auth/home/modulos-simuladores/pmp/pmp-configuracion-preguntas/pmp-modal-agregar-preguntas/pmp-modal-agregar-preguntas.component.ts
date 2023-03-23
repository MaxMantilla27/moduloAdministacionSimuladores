import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PmpEnvioFilePreguntaDTO, PmpEnvioRespuesDTO } from 'src/app/Models/PreguntaDTO';
import { PmpCategoriasService } from 'src/app/shared/Services/Pmp-Categorias/pmp-categorias.service';
import { PmpPreguntaRespuestaService } from 'src/app/shared/Services/Pmp-PreguntaRespuesta/pmp-preguntaRespuesta.service';
import { PmpTareaService } from 'src/app/shared/Services/Pmp-Tarea/pmp-tarea.service';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';
import { ModalAlternativasComponent } from './modal-alternativas/modal-alternativas.component';

@Component({
  selector: 'app-pmp-modal-agregar-preguntas',
  templateUrl: './pmp-modal-agregar-preguntas.component.html',
  styleUrls: ['./pmp-modal-agregar-preguntas.component.scss']
})
export class PmpModalAgregarPreguntasComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PmpModalAgregarPreguntasComponent>,
    private _Categorias: PmpCategoriasService,
    private _Tareas: PmpTareaService, 
    private _alternativa: PmpPreguntaRespuestaService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,


  ) { }

  displayedColumns= ['id', 'alternativa', 'correcto', 'puntaje', 'retroalimentacion','acciones'];


  loading:any
  loader:any
  public show:boolean = false;
  public botonMostrar:any = 'Show';
  public botonOcultar:any = 'Hide';
  formPregunta: FormGroup = this.formBuilder.group({
    Id: 0,
    IdCategoria: 0,
    IdSubCategoria: 0,
    IdTipoRespuesta: 0,
    Enunciado: '',
    ImagenPregunta: '',
    UrlVideo: '',
    Retroalimentacion: '',
    ImgPreguntaRetroalimentacion:'',
    TieneRetroalimentacion: true
  });

  public json:PmpEnvioFilePreguntaDTO={
 Id:0,
 nombreArchivo: '', 
 IdSimuladorPmpTarea: 0,
 IdSimuladorTipoRespuesta: 0,
 Enunciado: '',
 TieneRetroalimentacion: true, 
 UrlRetroalimentacionVideo: '',
 Retroalimentacion: '',
 Imagen: new File([],''),
 ImgRetroalimentacion: new File([],''),
 Respuestas : [] 
  }

  datasource: any
  listaCategorias:any
  listaSubCategorias:any
  listaTipoPregunta:any
  listaPregunta:any 
  lisSubCategoriaPorCategoria:Array<any>=[]
  categoria:any
  subcategoria:any
  tipoPregunta:any
  public idDominio: 0
  listaAlternativas: any = []
  agregarv= this.data[0]

  
  envio:any = [
    {
      idDominio: 0
    }
  ]

  ngOnInit(): void {
    console.log(this.data)
    console.log(this.agregarv)
    if(this.data[1]!=undefined)
      {
        // this.formPregunta.patchValue({
        //   IdCategoria:this.data.idCategoria
          
        // })
        this.formPregunta.get('Id')?.setValue(this.data[1].id)
        this.formPregunta.get('IdCategoria')?.setValue(this.data[1].idCategoria)
        this.formPregunta.get('IdSubCategoria')?.setValue(this.data[1].idSubCategoria)
        this.formPregunta.get('IdTipoRespuesta')?.setValue(this.data[1].idTipoRespuesta)
        this.formPregunta.get('Enunciado')?.setValue(this.data[1].enunciado)
        this.formPregunta.get('ImagenPregunta')?.setValue(this.data[1].imgPregunta)
        this.formPregunta.get('UrlVideo')?.setValue(this.data[1].urlVideo)
        this.formPregunta.get('Retroalimentacion')?.setValue(this.data[1].retroalimentacion)
        this.formPregunta.get('ImgPreguntaRetroalimentacion')?.setValue(this.data[1].ImgPreguntaRetroalimentacion)
        this.formPregunta.get('TieneRetroalimentacion')?.setValue(true)
        
        console.log(this.formPregunta)
    }
    else{
      this.formPregunta.reset();
    }
    // this.ObtenerCombo(),
    this.ObtenerComboCategorias()
    this.ObtenerAlternativa()
  }

  toggle(){
    this.show = !this.show;

    if(this.show)
      this.botonMostrar = "Show";
    else
      this.botonOcultar = "Hide";
  }

  Cancelar(){
    this.dialogRef.close();
  }

  Enviar(){
    console.log(this.formPregunta.value)

    this.json.Id = this.formPregunta.value.Id
    this.json.nombreArchivo = ''
    this.json.IdSimuladorPmpTarea = this.formPregunta.value.IdSubCategoria
    this.json.IdSimuladorTipoRespuesta = this.formPregunta.value.IdTipoRespuesta
    this.json.Enunciado = this.formPregunta.value.Enunciado
    this.json.TieneRetroalimentacion = true
    this.json.UrlRetroalimentacionVideo = ''
    this.json.Retroalimentacion = ''
    // this.json.
    this.json.Respuestas = []
    this.listaAlternativas.forEach((e:any) => {
      var alternativas : PmpEnvioRespuesDTO = {
        Id: e.Id,
        IdSimuladorPmpPregunta: 0,
        Alternativa: e.Alternativa, 
        Valor: 0, 
        correcto: true, 
        IdAspNetUsers: '', 
        Puntaje: e.Puntaje, 
        UrlRetroalimentacionVideo: '', 
        Imagen:  new File([],''),
        Retroalimentacion: e.Texto,
        UrlImagen: '' 
      }

      this.json.Respuestas.push(alternativas)
    });

    console.log(this.json)
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

  guardarPregunta(){

    this.json.Id = this.formPregunta.value.Id
    this.json.nombreArchivo = ''
    this.json.IdSimuladorPmpTarea = this.formPregunta.value.IdSubCategoria
    this.json.IdSimuladorTipoRespuesta = this.formPregunta.value.IdTipoRespuesta
    this.json.Enunciado = this.formPregunta.value.Enunciado
    this.json.TieneRetroalimentacion = true
    this.json.UrlRetroalimentacionVideo = ''
    this.json.Retroalimentacion = ''
    // this.json.
    // this.json.Respuestas = []
    this.listaAlternativas.forEach((e:any) => {
      var alternativas : PmpEnvioRespuesDTO = {
        Id: e.Id,
        IdSimuladorPmpPregunta: 0,
        Alternativa: e.Alternativa, 
        Valor: 0, 
        correcto: true, 
        IdAspNetUsers: '', 
        Puntaje: e.Puntaje, 
        UrlRetroalimentacionVideo: '', 
        Imagen:  new File([],''),
        Retroalimentacion: e.Texto,
        UrlImagen: '' 
      }

      this.json.Respuestas.push(alternativas)
    });

  }

  seleccionar(e:any){
    console.log(e)
    console.log(e.value)
    this.idDominio = e.value

    // this.ObtenerComboSubcategoria()
  }
  eliminar(){

  }

  abrirModalAlternativas(data: any){
    console.log();
    //Editar Pregunta
    const dialogRef = this.dialog.open(ModalAlternativasComponent, {
      width: '1500px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
      data:[data]
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  // ObtenerComboSubcategoria() {
  //   console.log(this.envio[0])
  //   this._Tareas.ObtenerSubcategoriaCombo(this.envio).subscribe({
  //     next: (x: any) => {
  //       this.listaSubCategorias = x;
  //       console.log(x)
  //     },
  //   });
  // }
  
  ObtenerComboCategorias() {
    this._Categorias.ObtenerComboCategorias().subscribe({
      next: (x: any) => {
        this.listaCategorias = x.categorias;
        this.listaSubCategorias= x.subCategorias;
        this.listaTipoPregunta = x.tipoRespuesta;
        this.FiltrarSubs(null)
        console.log(x)
      },
    });
  }

  ObtenerAlternativa(){
    if(this.data[1]!=undefined){
    console.log(this.data[1].id)
    this._alternativa.ObtenerAlternativa(this.data[1].id).subscribe({
          next: (x: any) => {
            this.listaAlternativas = x;
            console.log(x)
          },
        });
      }
  }

  FiltrarSubs(e:any){
   this.formPregunta.get('IdSubCategoria')?.setValue(null)
    this.lisSubCategoriaPorCategoria=[]
    var idcat=this.formPregunta.get('IdCategoria')?.value
    console.log(idcat);
    this.listaSubCategorias.forEach((ss:any) => {
      if(ss.idSimuladorPmpDominio==idcat){
        this.lisSubCategoriaPorCategoria.push(ss)
      }
    });
    console.log(this.lisSubCategoriaPorCategoria)
  }
  
  obtenerErrorCampoNombre(val= '') {
    var campo = this.formPregunta.get(val);
    if (campo!.hasError('required')) {
      if(val=='IdSimuladorPmpTarea'){
        return 'Ingresa el nombre';
      }
      if(val=='Enunciado'){
        return 'Ingresa una leyenda';
      }
      if(val=='IdSimuladorTipoRespuesta'){
        return 'Confirma tu nueva contraseña';
      }
    }
    return '';
  }

  
  agregar(){
    //Editar Pregunta
    const dialogRef = this.dialog.open(ModalAlternativasComponent, {
      width: '1500px',
      maxHeight: '90vh',
      panelClass: 'dialog-gestor',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.listaAlternativas.push(result)
      console.log(this.listaAlternativas)
    });
  }
  // ObtenerPmpPregunta(){
  //   this._Tareas.ObtenerSubcategoriaCombo(this.data.id).subscribe({
  //     next: (x: any) => {
  //       this.listaPregunta = x;
  //       console.log(x)
  //     },
  //   });
  // }
  
}