import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PmpConfiguracionSimuladorService } from 'src/app/shared/Services/Pmp-Configuracion-Simulador/pmp-configuracion-simulador.service';

@Component({
  selector: 'app-pmp',
  templateUrl: './pmp.component.html',
  styleUrls: ['./pmp.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PmpComponent implements OnInit {

  constructor(
    private _PmpConfiguracionSimulador: PmpConfiguracionSimuladorService
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
    this._PmpConfiguracionSimulador.PmpObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
