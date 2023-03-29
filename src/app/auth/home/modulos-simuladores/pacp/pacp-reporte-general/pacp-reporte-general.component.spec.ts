import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpReporteGeneralComponent } from './pacp-reporte-general.component';

describe('PacpReporteGeneralComponent', () => {
  let component: PacpReporteGeneralComponent;
  let fixture: ComponentFixture<PacpReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
