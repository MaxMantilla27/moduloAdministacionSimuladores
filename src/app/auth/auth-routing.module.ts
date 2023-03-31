import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmpComponent } from './home/modulos-simuladores/pmp/pmp.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { CissComponent } from './home/modulos-simuladores/ciss/ciss.component';
import { DevopsComponent } from './home/modulos-simuladores/devops/devops.component';
import { LabcComponent } from './home/modulos-simuladores/labc/labc.component';
import { PacpComponent } from './home/modulos-simuladores/pacp/pacp.component';
import { CmrpComponent } from './home/modulos-simuladores/cmrp/cmrp.component';
import { CapmComponent } from './home/modulos-simuladores/capm/capm.component';
import { LssbComponent } from './home/modulos-simuladores/lssb/lssb.component';
import { ItilComponent } from './home/modulos-simuladores/itil/itil.component';
import { TogComponent } from './home/modulos-simuladores/tog/tog.component';
import { AwsComponent } from './home/modulos-simuladores/aws/aws.component';
import { AdsaComponent } from './home/modulos-simuladores/adsa/adsa.component';
import { CcnaComponent } from './home/modulos-simuladores/ccna/ccna.component';
import { PbiComponent } from './home/modulos-simuladores/pbi/pbi.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'pmp', component: PmpComponent },
      { path: 'ciss', component: CissComponent },
      { path: 'devop', component: DevopsComponent },
      { path: 'labc', component: LabcComponent },
      { path: 'pacp', component: PacpComponent },
      { path: 'cmrp', component: CmrpComponent },
      { path: 'capm', component: CapmComponent },
      { path: 'itil', component: ItilComponent },
      { path: 'lssb', component: LssbComponent },
      { path: 'adsa', component: AdsaComponent },
      { path: 'aws', component: AwsComponent },
      { path: 'ccna', component: CcnaComponent },
      { path: 'pbi', component: PbiComponent },
      { path: 'tog', component: TogComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
