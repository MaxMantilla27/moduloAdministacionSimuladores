import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmpComponent } from './home/modulos-simuladores/pmp/pmp.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { PmpAdministrarUsuariosComponent } from './home/modulos-simuladores/pmp/pmp-administrar-usuarios/pmp-administrar-usuarios.component';
import { PmpConfiguracionCategoriasComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-categorias/pmp-configuracion-categorias.component';
import { PmpConfiguracionInterfazComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-interfaz/pmp-configuracion-interfaz.component';
import { PmpConfiguracionPreguntasComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-preguntas/pmp-configuracion-preguntas.component';
import { PmpConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/pmp/pmp-configuracion-tipo-preguntas/pmp-configuracion-tipo-preguntas.component';
import { PmpReporteGeneralComponent } from './home/modulos-simuladores/pmp/pmp-reporte-general/pmp-reporte-general.component';
import { PmpReporteUsuariosComponent } from './home/modulos-simuladores/pmp/pmp-reporte-usuarios/pmp-reporte-usuarios.component';
import { AwsComponent } from './home/modulos-simuladores/aws/aws.component';
import { AwsConfiguracionCategoriasComponent } from './home/modulos-simuladores/aws/aws-configuracion-categorias/aws-configuracion-categorias.component';
import { AwsConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/aws/aws-configuracion-tipo-preguntas/aws-configuracion-tipo-preguntas.component';
import { AwsConfiguracionPreguntasComponent } from './home/modulos-simuladores/aws/aws-configuracion-preguntas/aws-configuracion-preguntas.component';
import { AwsConfiguracionInterfazComponent } from './home/modulos-simuladores/aws/aws-configuracion-interfaz/aws-configuracion-interfaz.component';
import { AwsAdministrarUsuariosComponent } from './home/modulos-simuladores/aws/aws-administrar-usuarios/aws-administrar-usuarios.component';
import { AwsReporteGeneralComponent } from './home/modulos-simuladores/aws/aws-reporte-general/aws-reporte-general.component';
import { AwsReporteUsuariosComponent } from './home/modulos-simuladores/aws/aws-reporte-usuarios/aws-reporte-usuarios.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent  , canActivateChild:[AuthGuard] , children:
      [
        { path: '', component: HomeComponent},
        { path: 'pmp', component: PmpComponent},
        { path: 'pmp/configuracionCategorias',component:PmpConfiguracionCategoriasComponent},
        { path: 'pmp/configuracionTipoPreguntas', component: PmpConfiguracionTipoPreguntasComponent},
        { path: 'pmp/configuracionPreguntas', component: PmpConfiguracionPreguntasComponent},
        { path: 'pmp/configuracionInterfaz', component: PmpConfiguracionInterfazComponent},
        { path: 'pmp/administrarUsuarios', component: PmpAdministrarUsuariosComponent},
        { path: 'pmp/reporteGeneral', component: PmpReporteGeneralComponent},
        { path: 'pmp/reporteUsuario', component: PmpReporteUsuariosComponent},
        { path: 'aws', component: AwsComponent},
        { path: 'aws/configuracionCategorias',component: AwsConfiguracionCategoriasComponent},
        { path: 'aws/configuracionTipoPreguntas',component: AwsConfiguracionTipoPreguntasComponent},
        { path: 'aws/configuracionPreguntas',component: AwsConfiguracionPreguntasComponent},
        { path: 'aws/configuracionInterfaz',component: AwsConfiguracionInterfazComponent},
        { path: 'aws/administrarUsuarios',component: AwsAdministrarUsuariosComponent},
        { path: 'aws/reporteGeneral',component: AwsReporteGeneralComponent},
        { path: 'aws/reporteUsuario',component: AwsReporteUsuariosComponent},
        
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
