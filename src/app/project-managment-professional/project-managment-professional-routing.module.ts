import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/Guard/auth.guard';
import { ConfiguracionCategoriasComponent } from './configuracion-categorias/configuracion-categorias.component';
import { ConfiguracionPreguntasComponent } from './configuracion-preguntas/configuracion-preguntas.component';
import { ConfiguracionTipoPreguntasComponent } from './configuracion-tipo-preguntas/configuracion-tipo-preguntas.component';
import { ProjectManagmentProfessionalComponent } from './project-managment-professional.component';

const routes: Routes = [
  {path:'',component:ProjectManagmentProfessionalComponent,canActivateChild:[AuthGuard] ,children:[
    
    {path:'configuracion',component:ConfiguracionCategoriasComponent},
    {path:'configuracionTipoPreguntas', component: ConfiguracionTipoPreguntasComponent},
    {path:'configuracionPreguntas', component: ConfiguracionPreguntasComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagmentProfessionalRoutingModule { }
