import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LssbConfiguracionSimuladorService } from 'src/app/shared/Services/Lssb/Lssb-Configuracion-Simulador/lssb-configuracion-simulador.service';

@Component({
  selector: 'app-lssb',
  templateUrl: './lssb.component.html',
  styleUrls: ['./lssb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LssbComponent implements OnInit {

  constructor(
    private _LssbConfiguracionSimulador: LssbConfiguracionSimuladorService
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
    this._LssbConfiguracionSimulador.LssbObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
