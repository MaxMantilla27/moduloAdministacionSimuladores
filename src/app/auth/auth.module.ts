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
import { AwsComponent } from './home/modulos-simuladores/aws/aws.component';
import { AwsAdministrarUsuariosComponent } from './home/modulos-simuladores/aws/aws-administrar-usuarios/aws-administrar-usuarios.component';
import { AwsConfiguracionCategoriasComponent } from './home/modulos-simuladores/aws/aws-configuracion-categorias/aws-configuracion-categorias.component';
import { AwsConfiguracionInterfazComponent } from './home/modulos-simuladores/aws/aws-configuracion-interfaz/aws-configuracion-interfaz.component';
import { AwsConfiguracionPreguntasComponent } from './home/modulos-simuladores/aws/aws-configuracion-preguntas/aws-configuracion-preguntas.component';
import { AwsConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/aws/aws-configuracion-tipo-preguntas/aws-configuracion-tipo-preguntas.component';
import { AwsReporteGeneralComponent } from './home/modulos-simuladores/aws/aws-reporte-general/aws-reporte-general.component';
import { AwsReporteUsuariosComponent } from './home/modulos-simuladores/aws/aws-reporte-usuarios/aws-reporte-usuarios.component';
import { AwsModalAgregarPreguntasComponent } from './home/modulos-simuladores/aws/aws-configuracion-preguntas/aws-modal-agregar-preguntas/aws-modal-agregar-preguntas.component';
import { AwsModalAlternativasComponent } from './home/modulos-simuladores/aws/aws-configuracion-preguntas/aws-modal-agregar-preguntas/aws-modal-alternativas/aws-modal-alternativas.component';
import { AwsAbrirModalDetalleExamenComponent } from './home/modulos-simuladores/aws/aws-reporte-usuarios/aws-abrir-modal-detalle-examen/aws-abrir-modal-detalle-examen.component';
import { CcnaAdministrarUsuariosComponent } from './home/modulos-simuladores/ccna/ccna-administrar-usuarios/ccna-administrar-usuarios.component';
import { CcnaConfiguracionCategoriasComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-categorias/ccna-configuracion-categorias.component';
import { CcnaModalAgregarCategoriaComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-categorias/ccna-modal-agregar-categoria/ccna-modal-agregar-categoria.component';
import { CcnaConfiguracionInterfazComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-interfaz/ccna-configuracion-interfaz.component';
import { CcnaConfiguracionPreguntasComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-preguntas/ccna-configuracion-preguntas.component';
import { CcnaModalAgregarPreguntasComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-preguntas/ccna-modal-agregar-preguntas/ccna-modal-agregar-preguntas.component';
import { CcnaModalAlternativasComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-preguntas/ccna-modal-agregar-preguntas/ccna-modal-alternativas/ccna-modal-alternativas.component';
import { CcnaConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/ccna/ccna-configuracion-tipo-preguntas/ccna-configuracion-tipo-preguntas.component';
import { CcnaReporteGeneralComponent } from './home/modulos-simuladores/ccna/ccna-reporte-general/ccna-reporte-general.component';
import { CcnaReporteUsuariosComponent } from './home/modulos-simuladores/ccna/ccna-reporte-usuarios/ccna-reporte-usuarios.component';
import { CcnaAbrirModalDetalleExamenComponent } from './home/modulos-simuladores/ccna/ccna-reporte-usuarios/ccna-abrir-modal-detalle-examen/ccna-abrir-modal-detalle-examen.component';
import { CcnaComponent } from './home/modulos-simuladores/ccna/ccna.component';
import { AdsaComponent } from './home/modulos-simuladores/adsa/adsa.component';
import { AdsaConfiguracionCategoriasComponent} from './home/modulos-simuladores/adsa/adsa-configuracion-categorias/adsa-configuracion-categorias.component';
import { AdsaAdministrarUsuariosComponent } from './home/modulos-simuladores/adsa/adsa-administrar-usuarios/adsa-administrar-usuarios.component';
import { AdsaModalAgregarCategoriaComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-categorias/adsa-modal-agregar-categoria/adsa-modal-agregar-categoria.component';
import { AdsaConfiguracionInterfazComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-interfaz/adsa-configuracion-interfaz.component';
import { AdsaConfiguracionPreguntasComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-preguntas/adsa-configuracion-preguntas.component';
import { AdsaModalAgregarPreguntasComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-preguntas/adsa-modal-agregar-preguntas/adsa-modal-agregar-preguntas.component';
import { AdsaModalAlternativasComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-preguntas/adsa-modal-agregar-preguntas/adsa-modal-alternativas/adsa-modal-alternativas.component';
import { AdsaConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/adsa/adsa-configuracion-tipo-preguntas/adsa-configuracion-tipo-preguntas.component';
import { AdsaReporteGeneralComponent } from './home/modulos-simuladores/adsa/adsa-reporte-general/adsa-reporte-general.component';
import { AdsaReporteUsuariosComponent } from './home/modulos-simuladores/adsa/adsa-reporte-usuarios/adsa-reporte-usuarios.component';
import { AdsaAbrirModalDetalleExamenComponent } from './home/modulos-simuladores/adsa/adsa-reporte-usuarios/adsa-abrir-modal-detalle-examen/adsa-abrir-modal-detalle-examen.component';
import { PbiComponent } from './home/modulos-simuladores/pbi/pbi.component';
import { PbiAdministrarUsuariosComponent } from './home/modulos-simuladores/pbi/pbi-administrar-usuarios/pbi-administrar-usuarios.component';
import { PbiConfiguracionCategoriasComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-categorias/pbi-configuracion-categorias.component';
import { PbiModalAgregarCategoriaComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-categorias/pbi-modal-agregar-categoria/pbi-modal-agregar-categoria.component';
import { PbiConfiguracionInterfazComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-interfaz/pbi-configuracion-interfaz.component';
import { PbiConfiguracionPreguntasComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-preguntas/pbi-configuracion-preguntas.component';
import { PbiModalAgregarPreguntasComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-preguntas/pbi-modal-agregar-preguntas/pbi-modal-agregar-preguntas.component';
import { PbiModalAlternativasComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-preguntas/pbi-modal-agregar-preguntas/pbi-modal-alternativas/pbi-modal-alternativas.component';
import { PbiConfiguracionTipoPreguntasComponent } from './home/modulos-simuladores/pbi/pbi-configuracion-tipo-preguntas/pbi-configuracion-tipo-preguntas.component';
import { PbiReporteGeneralComponent } from './home/modulos-simuladores/pbi/pbi-reporte-general/pbi-reporte-general.component';
import { PbiReporteUsuariosComponent } from './home/modulos-simuladores/pbi/pbi-reporte-usuarios/pbi-reporte-usuarios.component';
import { PbiAbrirModalDetalleExamenComponent } from './home/modulos-simuladores/pbi/pbi-reporte-usuarios/pbi-abrir-modal-detalle-examen/pbi-abrir-modal-detalle-examen.component';

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
    ModalAlternativasComponent,
    AwsComponent,
    AwsAdministrarUsuariosComponent,
    AwsConfiguracionCategoriasComponent,
    AwsConfiguracionInterfazComponent,
    AwsConfiguracionPreguntasComponent,
    AwsConfiguracionTipoPreguntasComponent,
    AwsReporteGeneralComponent,
    AwsReporteUsuariosComponent,
    AwsModalAgregarPreguntasComponent,
    AwsModalAlternativasComponent,
    AwsAbrirModalDetalleExamenComponent,
    CcnaAdministrarUsuariosComponent,
    CcnaConfiguracionCategoriasComponent,
    CcnaModalAgregarCategoriaComponent,
    CcnaConfiguracionInterfazComponent,
    CcnaConfiguracionPreguntasComponent,
    CcnaModalAgregarPreguntasComponent,
    CcnaModalAlternativasComponent,
    CcnaConfiguracionTipoPreguntasComponent,
    CcnaReporteGeneralComponent,
    CcnaReporteUsuariosComponent,
    CcnaAbrirModalDetalleExamenComponent,
    CcnaComponent,
    AdsaComponent,
    AdsaAdministrarUsuariosComponent,
    AdsaConfiguracionCategoriasComponent,
    AdsaModalAgregarCategoriaComponent,
    AdsaConfiguracionInterfazComponent,
    AdsaConfiguracionPreguntasComponent,
    AdsaModalAgregarPreguntasComponent,
    AdsaModalAlternativasComponent,
    AdsaConfiguracionTipoPreguntasComponent,
    AdsaReporteGeneralComponent,
    AdsaReporteUsuariosComponent,
    AdsaAbrirModalDetalleExamenComponent,
    PbiComponent,
    PbiAdministrarUsuariosComponent,
    PbiConfiguracionCategoriasComponent,
    PbiModalAgregarCategoriaComponent,
    PbiConfiguracionInterfazComponent,
    PbiConfiguracionPreguntasComponent,
    PbiModalAgregarPreguntasComponent,
    PbiModalAlternativasComponent,
    PbiConfiguracionTipoPreguntasComponent,
    PbiReporteGeneralComponent,
    PbiReporteUsuariosComponent,
    PbiAbrirModalDetalleExamenComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgChartsModule,
  ]
})
export class AuthModule { }
