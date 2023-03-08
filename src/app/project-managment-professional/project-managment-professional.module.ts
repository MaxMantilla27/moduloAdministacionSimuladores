import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagmentProfessionalRoutingModule } from './project-managment-professional-routing.module';
import { ConfiguracionCategoriasComponent } from './configuracion-categorias/configuracion-categorias.component';
import { SharedModule } from '../shared/shared.module';
import { ConfiguracionPreguntasComponent } from './configuracion-preguntas/configuracion-preguntas.component';
import { ConfiguracionTipoPreguntasComponent } from './configuracion-tipo-preguntas/configuracion-tipo-preguntas.component';
import { ConfiguracionInterfazComponent } from './configuracion-interfaz/configuracion-interfaz.component';
import { AdministrarUsuariosComponent } from './administrar-usuarios/administrar-usuarios.component';
import { ReporteGeneralComponent } from './reporte-general/reporte-general.component';
import { ReporteUsuariosComponent } from './reporte-usuarios/reporte-usuarios.component';
import { ModalAgregarComponent } from './configuracion-categorias/modal-agregar/modal-agregar.component';
import { ModalAgregarPreguntasComponent } from './configuracion-preguntas/modal-agregar-preguntas/modal-agregar.component';


@NgModule({
  declarations: [
    ConfiguracionCategoriasComponent,
    ConfiguracionPreguntasComponent,
    ConfiguracionTipoPreguntasComponent,
    ConfiguracionInterfazComponent,
    AdministrarUsuariosComponent,
    ReporteGeneralComponent,
    ReporteUsuariosComponent,
    ModalAgregarComponent,
    ModalAgregarPreguntasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectManagmentProfessionalRoutingModule
  ]
})
export class ProjectManagmentProfessionalModule { }
