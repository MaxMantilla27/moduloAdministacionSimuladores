import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbReporteGeneralComponent } from './lssb-reporte-general.component';

describe('LssbReporteGeneralComponent', () => {
  let component: LssbReporteGeneralComponent;
  let fixture: ComponentFixture<LssbReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
