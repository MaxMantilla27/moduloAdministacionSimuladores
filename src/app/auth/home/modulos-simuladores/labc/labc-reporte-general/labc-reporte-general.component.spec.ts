import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcReporteGeneralComponent } from './labc-reporte-general.component';

describe('LabcReporteGeneralComponent', () => {
  let component: LabcReporteGeneralComponent;
  let fixture: ComponentFixture<LabcReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
