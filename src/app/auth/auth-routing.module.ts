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
import { AdsaComponent } from './home/modulos-simuladores/adsa/adsa.component';
import { AdsaConfiguracionCategoriasComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-categorias/adsa-configuracion-categorias.component';
import { AdsaConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-tipo-preguntas/adsa-configuracion-tipo-preguntas.component';
import { AdsaConfiguracionPreguntasComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-preguntas/adsa-configuracion-preguntas.component';
import { AdsaConfiguracionInterfazComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-interfaz/adsa-configuracion-interfaz.component';
import { AdsaAdministrarUsuariosComponent } from './home/modulos-simuladores/adsa/adsa-administrar-usuarios/adsa-administrar-usuarios.component';
import { AdsaReporteGeneralComponent } from './home/modulos-simuladores/adsa/adsa-reporte-general/adsa-reporte-general.component';
import { AdsaReporteUsuariosComponent } from './home/modulos-simuladores/adsa/adsa-reporte-usuarios/adsa-reporte-usuarios.component';
import { CcnaComponent } from './home/modulos-simuladores/ccna/ccna.component';
import { CcnaConfiguracionCategoriasComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-categorias/ccna-configuracion-categorias.component';
import { CcnaConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-tipo-preguntas/ccna-configuracion-tipo-preguntas.component';
import { CcnaConfiguracionPreguntasComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-preguntas/ccna-configuracion-preguntas.component';
import { CcnaConfiguracionInterfazComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-interfaz/ccna-configuracion-interfaz.component';
import { CcnaAdministrarUsuariosComponent } from './home/modulos-simuladores/ccna/ccna-administrar-usuarios/ccna-administrar-usuarios.component';
import { CcnaReporteUsuariosComponent } from './home/modulos-simuladores/ccna/ccna-reporte-usuarios/ccna-reporte-usuarios.component';
import { CcnaReporteGeneralComponent } from './home/modulos-simuladores/ccna/ccna-reporte-general/ccna-reporte-general.component';
import { PbiComponent } from './home/modulos-simuladores/pbi/pbi.component';
import { PbiConfiguracionCategoriasComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-categorias/pbi-configuracion-categorias.component';
import { PbiConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-tipo-preguntas/pbi-configuracion-tipo-preguntas.component';
import { PbiConfiguracionPreguntasComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-preguntas/pbi-configuracion-preguntas.component';
import { PbiConfiguracionInterfazComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-interfaz/pbi-configuracion-interfaz.component';
import { PbiAdministrarUsuariosComponent } from './home/modulos-simuladores/pbi/pbi-administrar-usuarios/pbi-administrar-usuarios.component';
import { PbiReporteUsuariosComponent } from './home/modulos-simuladores/pbi/pbi-reporte-usuarios/pbi-reporte-usuarios.component';
import { PbiReporteGeneralComponent } from './home/modulos-simuladores/pbi/pbi-reporte-general/pbi-reporte-general.component';

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
  },
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'aws', component: AwsComponent },
      {
        path: 'aws/configuracionCategorias',
        component: AwsConfiguracionCategoriasComponent,
      },
      {
        path: 'aws/configuracionTipoPreguntas',
        component: AwsConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'aws/configuracionPreguntas',
        component: AwsConfiguracionPreguntasComponent,
      },
      {
        path: 'aws/configuracionInterfaz',
        component: AwsConfiguracionInterfazComponent,
      },
      {
        path: 'aws/administrarUsuarios',
        component: AwsAdministrarUsuariosComponent,
      },
      { path: 'aws/reporteGeneral', component: AwsReporteGeneralComponent },
      { path: 'aws/reporteUsuario', component: AwsReporteUsuariosComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'adsa', component: AdsaComponent },
      {
        path: 'adsa/configuracionCategorias',
        component: AdsaConfiguracionCategoriasComponent,
      },
      {
        path: 'adsa/configuracionTipoPreguntas',
        component: AdsaConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'adsa/configuracionPreguntas',
        component: AdsaConfiguracionPreguntasComponent,
      },
      {
        path: 'adsa/configuracionInterfaz',
        component: AdsaConfiguracionInterfazComponent,
      },
      {
        path: 'adsa/administrarUsuarios',
        component: AdsaAdministrarUsuariosComponent,
      },
      { path: 'adsa/reporteGeneral', component: AdsaReporteGeneralComponent },
      { path: 'adsa/reporteUsuario', component: AdsaReporteUsuariosComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'ccna', component: CcnaComponent },
      {
        path: 'ccna/configuracionCategorias',
        component: CcnaConfiguracionCategoriasComponent,
      },
      {
        path: 'ccna/configuracionTipoPreguntas',
        component: CcnaConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'ccna/configuracionPreguntas',
        component: CcnaConfiguracionPreguntasComponent,
      },
      {
        path: 'ccna/configuracionInterfaz',
        component: CcnaConfiguracionInterfazComponent,
      },
      {
        path: 'ccna/administrarUsuarios',
        component: CcnaAdministrarUsuariosComponent,
      },
      { path: 'ccna/reporteGeneral', component: CcnaReporteGeneralComponent },
      { path: 'ccna/reporteUsuario', component: CcnaReporteUsuariosComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'pbi', component: PbiComponent },
      {
        path: 'pbi/configuracionCategorias',
        component: PbiConfiguracionCategoriasComponent,
      },
      {
        path: 'pbi/configuracionTipoPreguntas',
        component: PbiConfiguracionTipoPreguntasComponent,
      },
      {
        path: 'pbi/configuracionPreguntas',
        component: PbiConfiguracionPreguntasComponent,
      },
      {
        path: 'pbi/configuracionInterfaz',
        component: PbiConfiguracionInterfazComponent,
      },
      {
        path: 'pbi/administrarUsuarios',
        component: PbiAdministrarUsuariosComponent,
      },
      { path: 'pbi/reporteGeneral', component: PbiReporteGeneralComponent },
      { path: 'pbi/reporteUsuario', component: PbiReporteUsuariosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
