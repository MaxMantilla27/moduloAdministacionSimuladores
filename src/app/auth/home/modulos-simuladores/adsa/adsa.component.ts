import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { AdsaConfiguracionSimuladorService } from 'src/app/shared/Services/Adsa/Adsa-Configuracion-Simulador/adsa-configuracion-simulador.service';

@Component({
  selector: 'app-adsa',
  templateUrl: './adsa.component.html',
  styleUrls: ['./adsa.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdsaComponent implements OnInit {

  constructor(
    private _AdsaConfiguracionSimulador: AdsaConfiguracionSimuladorService
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
    this._AdsaConfiguracionSimulador.AdsaObtenerConfiguracionSimulador().subscribe({
      next: (x: any) => {
        console.log(x)
        this.ConfiguracionSimulador = x;
        this.Esquema=x.esquema;
        this.LogoSimulador=x.logo;
      },
    });
  }
}
