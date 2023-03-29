import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { LabcConfiguracionSimuladorService } from 'src/app/shared/Services/Labc/Labc-Configuracion-Simulador/labc-configuracion-simulador.service';


@Component({
  selector: 'app-labc',
  templateUrl: './labc.component.html',
  styleUrls: ['./labc.component.scss']
})
export class LabcComponent implements OnInit {

  constructor(
    private _LabcConfiguracionSimulador: LabcConfiguracionSimuladorService
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
    this._LabcConfiguracionSimulador.LabcObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }

}
