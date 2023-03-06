import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './Interceptor/interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HelperService } from './shared/Services/helper.service';
import { ProjectManagmentProfessionalComponent } from './project-managment-professional/project-managment-professional.component';
import { ProjectManagmentProfessionalModule } from './project-managment-professional/project-managment-professional.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    ProjectManagmentProfessionalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProjectManagmentProfessionalModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    HelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
