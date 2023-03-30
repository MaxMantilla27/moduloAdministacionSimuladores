import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TogConfiguracionSimuladorService } from 'src/app/shared/Services/Tog/Tog-Configuracion-Simulador/tog-configuracion-simulador.service';

@Component({
  selector: 'app-tog',
  templateUrl: './tog.component.html',
  styleUrls: ['./tog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TogComponent implements OnInit {

  constructor(
    private _TogConfiguracionSimulador: TogConfiguracionSimuladorService
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
    this._TogConfiguracionSimulador.TogObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
