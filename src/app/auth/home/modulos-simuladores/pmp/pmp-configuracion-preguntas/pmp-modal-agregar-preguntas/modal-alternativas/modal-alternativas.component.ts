import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-modal-alternativas',
  templateUrl: './modal-alternativas.component.html',
  styleUrls: ['./modal-alternativas.component.scss']
})
export class ModalAlternativasComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  loading:any
  loader:any;
  data:any;
  formAlternativa: FormGroup = this.formBuilder.group({
    Id: 0,
    NombreCategoria: '',
    Leyenda: '',
    CantidadPreguntasTotales: 0,
    CantidadPreguntasExamen: 0,
    Proporcion: 0,
    TieneSubCategoria: 0,
    Logo: 0
  });
  
  ngOnInit(): void {
    console.log(this.data)
    if(this.data!=undefined)
    {
      this.formAlternativa.get('Id')?.setValue(this.data[0].id)
      this.formAlternativa.get('NombreCategoria')?.setValue(this.data[0].nombre)
      this.formAlternativa.get('Leyenda')?.setValue(this.data[0].leyenda)
      this.formAlternativa.get('CantidadPreguntasTotales')?.setValue(this.data[0].cantidadTotal)
      this.formAlternativa.get('CantidadPreguntasExamen')?.setValue(this.data[0].cantidadPreguntasPorExamen)
      this.formAlternativa.get('Proporcion')?.setValue(this.data[0].proporcion)
      this.formAlternativa.get('TieneSubCategoria')?.setValue(this.data[0].tieneSubCategoria)
      this.formAlternativa.get('Logo')?.setValue(this.data[0].imgLogo)
      console.log(this.formAlternativa)
    }
    else{
      this.formAlternativa.reset();
    }
  }

  obtenerErrorCampoNombre(val: string) {
    var campo = this.formAlternativa.get(val);
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

  Cancelar(){

  }

}
