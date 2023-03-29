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
import { CissComponent } from './home/modulos-simuladores/ciss/ciss.component';
import { CissConfiguracionCategoriasComponent } from './home/modulos-simuladores/ciss/ciss-configuracion-categorias/ciss-configuracion-categorias.component';
import { CissConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/ciss/ciss-configuracion-tipo-preguntas/ciss-configuracion-tipo-preguntas.component';
import { CissConfiguracionPreguntasComponent } from './home/modulos-simuladores/ciss/ciss-configuracion-preguntas/ciss-configuracion-preguntas.component';
import { CissConfiguracionInterfazComponent } from './home/modulos-simuladores/ciss/ciss-configuracion-interfaz/ciss-configuracion-interfaz.component';
import { CissAdministrarUsuariosComponent } from './home/modulos-simuladores/ciss/ciss-administrar-usuarios/ciss-administrar-usuarios.component';
import { CissReporteGeneralComponent } from './home/modulos-simuladores/ciss/ciss-reporte-general/ciss-reporte-general.component';
import { CissReporteUsuariosComponent } from './home/modulos-simuladores/ciss/ciss-reporte-usuarios/ciss-reporte-usuarios.component';
import { DevopsComponent } from './home/modulos-simuladores/devops/devops.component';
import { DevopsConfiguracionCategoriasComponent } from './home/modulos-simuladores/devops/devops-configuracion-categorias/devops-configuracion-categorias.component';
import { DevopsConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/devops/devops-configuracion-tipo-preguntas/devops-configuracion-tipo-preguntas.component';
import { DevopsConfiguracionPreguntasComponent } from './home/modulos-simuladores/devops/devops-configuracion-preguntas/devops-configuracion-preguntas.component';
import { DevopsConfiguracionInterfazComponent } from './home/modulos-simuladores/devops/devops-configuracion-interfaz/devops-configuracion-interfaz.component';
import { DevopsAdministrarUsuariosComponent } from './home/modulos-simuladores/devops/devops-administrar-usuarios/devops-administrar-usuarios.component';
import { DevopsReporteGeneralComponent } from './home/modulos-simuladores/devops/devops-reporte-general/devops-reporte-general.component';
import { DevopsReporteUsuariosComponent } from './home/modulos-simuladores/devops/devops-reporte-usuarios/devops-reporte-usuarios.component';
import { LabcComponent } from './home/modulos-simuladores/labc/labc.component';
import { LabcConfiguracionCategoriasComponent } from './home/modulos-simuladores/labc/labc-configuracion-categorias/labc-configuracion-categorias.component';
import { LabcConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/labc/labc-configuracion-tipo-preguntas/labc-configuracion-tipo-preguntas.component';
import { LabcConfiguracionPreguntasComponent } from './home/modulos-simuladores/labc/labc-configuracion-preguntas/labc-configuracion-preguntas.component';
import { LabcConfiguracionInterfazComponent } from './home/modulos-simuladores/labc/labc-configuracion-interfaz/labc-configuracion-interfaz.component';
import { LabcAdministrarUsuariosComponent } from './home/modulos-simuladores/labc/labc-administrar-usuarios/labc-administrar-usuarios.component';
import { LabcReporteGeneralComponent } from './home/modulos-simuladores/labc/labc-reporte-general/labc-reporte-general.component';
import { LabcReporteUsuariosComponent } from './home/modulos-simuladores/labc/labc-reporte-usuarios/labc-reporte-usuarios.component';
import { PacpComponent } from './home/modulos-simuladores/pacp/pacp.component';
import { PacpConfiguracionCategoriasComponent } from './home/modulos-simuladores/pacp/pacp-configuracion-categorias/pacp-configuracion-categorias.component';
import { PacpConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/pacp/pacp-configuracion-tipo-preguntas/pacp-configuracion-tipo-preguntas.component';
import { PacpConfiguracionPreguntasComponent } from './home/modulos-simuladores/pacp/pacp-configuracion-preguntas/pacp-configuracion-preguntas.component';
import { PacpConfiguracionInterfazComponent } from './home/modulos-simuladores/pacp/pacp-configuracion-interfaz/pacp-configuracion-interfaz.component';
import { PacpAdministrarUsuariosComponent } from './home/modulos-simuladores/pacp/pacp-administrar-usuarios/pacp-administrar-usuarios.component';
import { PacpReporteGeneralComponent } from './home/modulos-simuladores/pacp/pacp-reporte-general/pacp-reporte-general.component';
import { PacpReporteUsuariosComponent } from './home/modulos-simuladores/pacp/pacp-reporte-usuarios/pacp-reporte-usuarios.component';
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
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'pmp', component: PmpComponent },
      {
        path: 'pmp/configuracionCategorias',
        component: PmpConfiguracionCategoriasComponent,
      },
      {
        path: 'pmp/configuracionTipoPreguntas',
        component: PmpConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'pmp/configuracionPreguntas',
        component: PmpConfiguracionPreguntasComponent,
      },
      {
        path: 'pmp/configuracionInterfaz',
        component: PmpConfiguracionInterfazComponent,
      },
      {
        path: 'pmp/administrarUsuarios',
        component: PmpAdministrarUsuariosComponent,
      },
      { path: 'pmp/reporteGeneral', component: PmpReporteGeneralComponent },
      { path: 'pmp/reporteUsuario', component: PmpReporteUsuariosComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'ciss', component: CissComponent },
      {
        path: 'ciss/configuracionCategorias',
        component: CissConfiguracionCategoriasComponent,
      },
      {
        path: 'ciss/configuracionTipoPreguntas',
        component: CissConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'ciss/configuracionPreguntas',
        component: CissConfiguracionPreguntasComponent,
      },
      {
        path: 'ciss/configuracionInterfaz',
        component: CissConfiguracionInterfazComponent,
      },
      {
        path: 'ciss/administrarUsuarios',
        component: CissAdministrarUsuariosComponent,
      },
      { path: 'ciss/reporteGeneral', component: CissReporteGeneralComponent },
      { path: 'ciss/reporteUsuario', component: CissReporteUsuariosComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'devop', component: DevopsComponent },
      {
        path: 'devop/configuracionCategorias',
        component: DevopsConfiguracionCategoriasComponent,
      },
      {
        path: 'devop/configuracionTipoPreguntas',
        component: DevopsConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'devop/configuracionPreguntas',
        component: DevopsConfiguracionPreguntasComponent,
      },
      {
        path: 'devop/configuracionInterfaz',
        component: DevopsConfiguracionInterfazComponent,
      },
      {
        path: 'devop/administrarUsuarios',
        component: DevopsAdministrarUsuariosComponent,
      },
      {
        path: 'devop/reporteGeneral',
        component: DevopsReporteGeneralComponent,
      },
      {
        path: 'devop/reporteUsuario',
        component: DevopsReporteUsuariosComponent,
      },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'labc', component: LabcComponent },
      {
        path: 'labc/configuracionCategorias',
        component: LabcConfiguracionCategoriasComponent,
      },
      {
        path: 'labc/configuracionTipoPreguntas',
        component: LabcConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'labc/configuracionPreguntas',
        component: LabcConfiguracionPreguntasComponent,
      },
      {
        path: 'labc/configuracionInterfaz',
        component: LabcConfiguracionInterfazComponent,
      },
      {
        path: 'labc/administrarUsuarios',
        component: LabcAdministrarUsuariosComponent,
      },
      { path: 'labc/reporteGeneral', component: LabcReporteGeneralComponent },
      { path: 'labc/reporteUsuario', component: LabcReporteUsuariosComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'pacp', component: PacpComponent },
      {
        path: 'pacp/configuracionCategorias',
        component: PacpConfiguracionCategoriasComponent,
      },
      {
        path: 'pacp/configuracionTipoPreguntas',
        component: PacpConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'pacp/configuracionPreguntas',
        component: PacpConfiguracionPreguntasComponent,
      },
      {
        path: 'pacp/configuracionInterfaz',
        component: PacpConfiguracionInterfazComponent,
      },
      {
        path: 'pacp/administrarUsuarios',
        component: PacpAdministrarUsuariosComponent,
      },
      { path: 'pacp/reporteGeneral', component: PacpReporteGeneralComponent },
      { path: 'pacp/reporteUsuario', component: PacpReporteUsuariosComponent },
    ],
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
