import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/Guard/auth.guard';
import { AdministrarUsuariosComponent } from './administrar-usuarios/administrar-usuarios.component';
import { ConfiguracionCategoriasComponent } from './configuracion-categorias/configuracion-categorias.component';
import { ConfiguracionInterfazComponent } from './configuracion-interfaz/configuracion-interfaz.component';
import { ConfiguracionPreguntasComponent } from './configuracion-preguntas/configuracion-preguntas.component';
import { ConfiguracionTipoPreguntasComponent } from './configuracion-tipo-preguntas/configuracion-tipo-preguntas.component';
import { ProjectManagmentProfessionalComponent } from './project-managment-professional.component';
import { ReporteGeneralComponent } from './reporte-general/reporte-general.component';

const routes: Routes = [
  {path:'',component:ProjectManagmentProfessionalComponent,canActivateChild:[AuthGuard] ,children:[
    
    {path:'configuracion',component:ConfiguracionCategoriasComponent},
    {path:'configuracionTipoPreguntas', component: ConfiguracionTipoPreguntasComponent},
    {path:'configuracionPreguntas', component: ConfiguracionPreguntasComponent},
    {path:'configuracionInterfaz', component: ConfiguracionInterfazComponent},
    {path:'administrarUsuarios', component: AdministrarUsuariosComponent},
    {path:'reporteGeneral', component: ReporteGeneralComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagmentProfessionalRoutingModule { }
