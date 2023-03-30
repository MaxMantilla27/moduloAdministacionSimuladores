import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CapmConfiguracionSimuladorService } from 'src/app/shared/Services/Capm/Capm-Configuracion-Simulador/capm-configuracion-simulador.service';

@Component({
  selector: 'app-capm',
  templateUrl: './capm.component.html',
  styleUrls: ['./capm.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CapmComponent implements OnInit {

  constructor(
    private _CapmConfiguracionSimulador: CapmConfiguracionSimuladorService
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
    this._CapmConfiguracionSimulador.CapmObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
