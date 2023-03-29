import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsReporteGeneralComponent } from './devops-reporte-general.component';

describe('DevopsReporteGeneralComponent', () => {
  let component: DevopsReporteGeneralComponent;
  let fixture: ComponentFixture<DevopsReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
