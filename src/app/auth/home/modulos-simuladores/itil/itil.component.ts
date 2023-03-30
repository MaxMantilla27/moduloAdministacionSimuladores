import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ItilConfiguracionSimuladorService } from 'src/app/shared/Services/Itil/Itil-Configuracion-Simulador/itil-configuracion-simulador.service';

@Component({
  selector: 'app-itil',
  templateUrl: './itil.component.html',
  styleUrls: ['./itil.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItilComponent implements OnInit {

  constructor(
    private _ItilConfiguracionSimulador: ItilConfiguracionSimuladorService
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
    this._ItilConfiguracionSimulador.ItilObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
