import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { PmpAdministrarUsuariosComponent } from './home/modulos-simuladores/pmp/pmp-administrar-usuarios/pmp-administrar-usuarios.component';
import { PmpConfiguracionCategoriasComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-categorias/pmp-configuracion-categorias.component';
import { PmpModalAgregarCategoriaComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-categorias/pmp-modal-agregar-categoria/pmp-modal-agregar-categoria.component';
import { PmpModalAgregarSubcategoriaComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-categorias/pmp-modal-agregar-subcategoria/pmp-modal-agregar-subcategoria.component';
import { PmpConfiguracionInterfazComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-interfaz/pmp-configuracion-interfaz.component';
import { PmpConfiguracionPreguntasComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-preguntas/pmp-configuracion-preguntas.component';
import { PmpModalAgregarPreguntasComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-preguntas/pmp-modal-agregar-preguntas/pmp-modal-agregar-preguntas.component';
import { PmpConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-tipo-preguntas/pmp-configuracion-tipo-preguntas.component';
import { PmpReporteGeneralComponent } from './home/modulos-simuladores/pmp/pmp-reporte-general/pmp-reporte-general.component';
import { PmpReporteUsuariosComponent } from './home/modulos-simuladores/pmp/pmp-reporte-usuarios/pmp-reporte-usuarios.component';
import { PmpComponent } from './home/modulos-simuladores/pmp/pmp.component';
import { PmpAbrirModalDetalleExamenComponent } from './home/modulos-simuladores/pmp/pmp-reporte-usuarios/pmp-abrir-modal-detalle-examen/pmp-abrir-modal-detalle-examen/pmp-abrir-modal-detalle-examen.component';
import { ModalAlternativasComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-preguntas/pmp-modal-agregar-preguntas/pmp-modal-alternativas/modal-alternativas.component';

@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    PmpComponent,
    PmpAdministrarUsuariosComponent,
    PmpConfiguracionCategoriasComponent,
    PmpModalAgregarCategoriaComponent,
    PmpModalAgregarSubcategoriaComponent,
    PmpConfiguracionInterfazComponent,
    PmpConfiguracionPreguntasComponent,
    PmpModalAgregarPreguntasComponent,
    PmpConfiguracionTipoPreguntasComponent,
    PmpReporteGeneralComponent,
    PmpReporteUsuariosComponent,
    PmpModalAgregarCategoriaComponent,
    PmpModalAgregarPreguntasComponent,
    PmpModalAgregarSubcategoriaComponent,
    PmpAbrirModalDetalleExamenComponent,
    ModalAlternativasComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgChartsModule,
  ]
})
export class AuthModule { }
