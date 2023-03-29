import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CissConfiguracionSimuladorService } from 'src/app/shared/Services/Ciss/Ciss-Configuracion-Simulador/ciss-configuracion-simulador.service';

@Component({
  selector: 'app-ciss',
  templateUrl: './ciss.component.html',
  styleUrls: ['./ciss.component.scss']
})
export class CissComponent implements OnInit {

  constructor(
    private _CissConfiguracionSimulador: CissConfiguracionSimuladorService
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
    this._CissConfiguracionSimulador.CissObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
