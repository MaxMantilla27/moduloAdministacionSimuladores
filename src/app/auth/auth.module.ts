import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgChartsModule,
  ]
})
export class AuthModule { }
