import { Component, ElementRef, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subject,takeUntil } from 'rxjs';
import { AvatarDTO } from 'src/app/Models/AvatarDTO';
import { AvatarService } from 'src/app/shared/Services/Avatar/avatar.service';
import { SessionStorageService } from 'src/app/shared/Services/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _SessionStorageService:SessionStorageService,
    private _AvatarService:AvatarService,
    private elementRef: ElementRef
  ) { }
  private signal$ = new Subject();

  ngOnDestroy(): void {
    this.signal$.next(true)
    this.signal$.complete()
  }
  public NombreAlumno=''
  public urlAvatar='';
  public Avatar: AvatarDTO = {
    id: 0,
    idPersonal: 0,
    accessories: '',
    clothes: '',
    clothesColor: '',
    eyes: '',
    eyesbrow: '',
    facialHair: '',
    facialHairColor: '',
    hairColor: '',
    mouth: '',
    skin: '',
    top: '',
    idSexo:0,
    usuario:''
  };

  public token: boolean = this._SessionStorageService.validateTokken();

  ngOnInit(): void {

    if (this.token) {
      this.ObtenerAvatar();
    }
  }

  ObtenerAvatar() {
    this._AvatarService.ObtenerAvatar().pipe(takeUntil(this.signal$)).subscribe({
      next: (x) => {
        this.Avatar = x;
        this.NombreAlumno = x.nombres
        this.urlAvatar=this._AvatarService.GetUrlImagenAvatar(this.Avatar);
      },
    });
  }

}
