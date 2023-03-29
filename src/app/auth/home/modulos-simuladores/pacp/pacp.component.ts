import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PacpConfiguracionSimuladorService } from 'src/app/shared/Services/Pacp/Pacp-Configuracion-Simulador/pacp-configuracion-simulador.service';

@Component({
  selector: 'app-pacp',
  templateUrl: './pacp.component.html',
  styleUrls: ['./pacp.component.scss']
})
export class PacpComponent implements OnInit {

  constructor(
    private _PacpConfiguracionSimulador: PacpConfiguracionSimuladorService
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
    this._PacpConfiguracionSimulador.PacpObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
