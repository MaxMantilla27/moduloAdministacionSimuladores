import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagmentProfessionalRoutingModule } from './project-managment-professional-routing.module';
import { ConfiguracionCategoriasComponent } from './configuracion-categorias/configuracion-categorias.component';
import { SharedModule } from '../shared/shared.module';
import { ConfiguracionPreguntasComponent } from './configuracion-preguntas/configuracion-preguntas.component';
import { ConfiguracionTipoPreguntasComponent } from './configuracion-tipo-preguntas/configuracion-tipo-preguntas.component';
import { ConfiguracionInterfazComponent } from './configuracion-interfaz/configuracion-interfaz.component';


@NgModule({
  declarations: [
    ConfiguracionCategoriasComponent,
    ConfiguracionPreguntasComponent,
    ConfiguracionTipoPreguntasComponent,
    ConfiguracionInterfazComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectManagmentProfessionalRoutingModule
  ]
})
export class ProjectManagmentProfessionalModule { }
