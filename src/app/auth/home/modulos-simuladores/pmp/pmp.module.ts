import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PmpModalAgregarSubcategoriaComponent } from './pmp-configuracion-categorias/pmp-modal-agregar-subcategoria/pmp-modal-agregar-subcategoria.component';
import { PmpConfiguracionCategoriasComponent } from './pmp-configuracion-categorias/pmp-configuracion-categorias.component';
import { PmpConfiguracionPreguntasComponent } from './pmp-configuracion-preguntas/pmp-configuracion-preguntas.component';
import { PmpConfiguracionTipoPreguntasComponent } from './pmp-configuracion-tipo-preguntas/pmp-configuracion-tipo-preguntas.component';
import { PmpConfiguracionInterfazComponent } from './pmp-configuracion-interfaz/pmp-configuracion-interfaz.component';
import { PmpAdministrarUsuariosComponent } from './pmp-administrar-usuarios/pmp-administrar-usuarios.component';
import { PmpReporteGeneralComponent } from './pmp-reporte-general/pmp-reporte-general.component';
import { PmpReporteUsuariosComponent } from './pmp-reporte-usuarios/pmp-reporte-usuarios.component';
import { PmpModalAgregarCategoriaComponent } from './pmp-configuracion-categorias/pmp-modal-agregar-categoria/pmp-modal-agregar-categoria.component';
import { PmpModalAgregarPreguntasComponent } from './pmp-configuracion-preguntas/pmp-modal-agregar-preguntas/pmp-modal-agregar-preguntas.component';

@NgModule({
  declarations: [
    PmpConfiguracionCategoriasComponent,
    PmpConfiguracionPreguntasComponent,
    PmpConfiguracionTipoPreguntasComponent,
    PmpConfiguracionInterfazComponent,
    PmpAdministrarUsuariosComponent,
    PmpReporteGeneralComponent,
    PmpReporteUsuariosComponent,
    PmpModalAgregarCategoriaComponent,
    PmpModalAgregarPreguntasComponent,
    PmpModalAgregarSubcategoriaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PmpModule
  ]
})
export class PmpModule { }
