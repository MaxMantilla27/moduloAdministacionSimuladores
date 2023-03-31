import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CcnaConfiguracionSimuladorService } from 'src/app/shared/Services/Ccna/Ccna-Configuracion-Simulador/ccna-configuracion-simulador.service';

@Component({
  selector: 'app-ccna',
  templateUrl: './ccna.component.html',
  styleUrls: ['./ccna.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CcnaComponent implements OnInit {

  constructor(
    private _CcnaConfiguracionSimulador: CcnaConfiguracionSimuladorService
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
    this._CcnaConfiguracionSimulador.CcnaObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
