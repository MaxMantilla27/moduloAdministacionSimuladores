import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-configuracion-interfaz',
  templateUrl: './configuracion-interfaz.component.html',
  styleUrls: ['./configuracion-interfaz.component.scss']
})
export class ConfiguracionInterfazComponent implements OnInit {

  constructor() { }

  datasource=[]

  displayedColumns: string[] = ['minimo', 'maximo', 'intentos', 'nivel'];

  ngOnInit(): void {
  }

}
