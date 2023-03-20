import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { PmpCategoriasService } from 'src/app/shared/Services/Pmp-Categorias/pmp-categorias.service';
import { PmpTareaService } from 'src/app/shared/Services/Pmp-Tarea/pmp-tarea.service';
import { PmpTipoRespuestaService } from 'src/app/shared/Services/Pmp-Tipo-Respuesta/pmp-tipo-respuesta.service';

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
    private formBuilder: FormBuilder

  ) { }

  displayedColumns: string[] = ['id', 'alternativa', 'correcto', 'puntaje', 'retroalimentacion'];


  loading:any
  loader:any
  public show:boolean = true;
  public botonMostrar:any = 'Show';
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

  datasource: any
  listaCategorias:any
  listaSubCategorias:any
  listaTipoPregunta:any
  listaPregunta:any 
  lisSubCategoriaPorCateogoria:Array<any>=[]
  categoria:any
  subcategoria:any
  tipoPregunta:any
  public idDominio: 0
  
  envio:any = [
    {
      idDominio: 0
    }
  ]

  ngOnInit(): void {
    console.log(this.data)
    if(this.data!=undefined)
      {
        // this.formPregunta.patchValue({
        //   IdCategoria:this.data.idCategoria
          
        // })
        this.formPregunta.get('Id')?.setValue(this.data.id)
        this.formPregunta.get('IdCategoria')?.setValue(this.data.idCategoria)
        this.formPregunta.get('IdSubCategoria')?.setValue(this.data.idSubCategoria)
        this.formPregunta.get('IdTipoRespuesta')?.setValue(this.data.idTipoRespuesta)
        this.formPregunta.get('Enunciado')?.setValue(this.data.enunciado)
        this.formPregunta.get('ImagenPregunta')?.setValue(this.data.imgPregunta)
        this.formPregunta.get('UrlVideo')?.setValue(this.data.urlVideo)
        this.formPregunta.get('Retroalimentacion')?.setValue(this.data.retroalimentacion)
        this.formPregunta.get('ImgPreguntaRetroalimentacion')?.setValue(this.data.imgPreguntaRetroalimentacion)
        this.formPregunta.get('TieneRetroalimentacion')?.setValue(true)
        
        console.log(this.formPregunta)
    }
    else{
      this.formPregunta.reset();
    }
    // this.ObtenerCombo(),
    this.ObtenerComboCategorias()
  }

  toggle(){
    this.show = !this.show;

    if(this.show)
      this.botonMostrar = "Hide";
    else
      this.botonMostrar = "Show";
  }

  Cancelar(){
    this.dialogRef.close();
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


  seleccionar(e:any){
    console.log(e)
    console.log(e.value)
    this.idDominio = e.value

    // this.ObtenerComboSubcategoria()
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
  FiltrarSubs(e:any){
   this.formPregunta.get('IdSubCategoria')?.setValue(null)
    this.lisSubCategoriaPorCateogoria=[]
    var idcat=this.formPregunta.get('IdCategoria')?.value
    console.log(idcat);
    this.listaSubCategorias.forEach((ss:any) => {
      if(ss.idSimuladorPmpDominio==idcat){
        this.lisSubCategoriaPorCateogoria.push(ss)
      }
    });
    console.log(this.lisSubCategoriaPorCateogoria)
  }
  
  obtenerErrorCampoNombre(val: string) {
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

  // ObtenerPmpPregunta(){
  //   this._Tareas.ObtenerSubcategoriaCombo(this.data.id).subscribe({
  //     next: (x: any) => {
  //       this.listaPregunta = x;
  //       console.log(x)
  //     },
  //   });
  // }
  
}