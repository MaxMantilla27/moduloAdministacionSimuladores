import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmpAdministrarUsuariosComponent } from './pmp-administrar-usuarios/pmp-administrar-usuarios.component';
import { PmpConfiguracionCategoriasComponent } from './pmp-configuracion-categorias/pmp-configuracion-categorias.component';
import { PmpConfiguracionInterfazComponent } from './pmp-configuracion-interfaz/pmp-configuracion-interfaz.component';
import { PmpConfiguracionPreguntasComponent } from './pmp-configuracion-preguntas/pmp-configuracion-preguntas.component';
import { PmpConfiguracionTipoPreguntasComponent } from './pmp-configuracion-tipo-preguntas/pmp-configuracion-tipo-preguntas.component';
import { PmpReporteGeneralComponent } from './pmp-reporte-general/pmp-reporte-general.component';
import { PmpReporteUsuariosComponent } from './pmp-reporte-usuarios/pmp-reporte-usuarios.component';
import { PmpComponent } from './pmp.component';
import { AuthGuard } from 'src/app/auth/Guard/auth.guard';

const routes: Routes = [
  {
    {path:'pmp',component:PmpComponent,canActivateChild:[AuthGuard] ,children:[

      {path:'configuracionCategorias',component:PmpConfiguracionCategoriasComponent},
      {path:'configuracionTipoPreguntas', component: PmpConfiguracionTipoPreguntasComponent},
      {path:'configuracionPreguntas', component: PmpConfiguracionPreguntasComponent},
      {path:'configuracionInterfaz', component: PmpConfiguracionInterfazComponent},
      {path:'administrarUsuarios', component: PmpAdministrarUsuariosComponent},
      {path:'reporteGeneral', component: PmpReporteGeneralComponent},
      {path: 'reporteUsuario', component: PmpReporteUsuariosComponent}
    ]},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class PmpRoutingModule { }
