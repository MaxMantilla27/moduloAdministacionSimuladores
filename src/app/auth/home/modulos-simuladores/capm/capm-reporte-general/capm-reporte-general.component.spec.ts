import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmReporteGeneralComponent } from './capm-reporte-general.component';

describe('CapmReporteGeneralComponent', () => {
  let component: CapmReporteGeneralComponent;
  let fixture: ComponentFixture<CapmReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
