import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CmrpConfiguracionSimuladorService } from 'src/app/shared/Services/Cmrp/Cmrp-Configuracion-Simulador/cmrp-configuracion-simulador.service';

@Component({
  selector: 'app-cmrp',
  templateUrl: './cmrp.component.html',
  styleUrls: ['./cmrp.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CmrpComponent implements OnInit {

  constructor(
    private _CmrpConfiguracionSimulador: CmrpConfiguracionSimuladorService
  ) { }


  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  public hide=false
  public tabIndex = 0;
  public ConfiguracionSimulador:any;
  public Esquema:string;
  public LogoSimulador:string;

  ngOnInit(): void {
    this.ObtenerConfiguracionSimulador()
  }

  ObtenerConfiguracionSimulador() {
    this._CmrpConfiguracionSimulador.CmrpObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
