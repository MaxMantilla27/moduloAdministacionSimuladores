import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcReporteUsuariosComponent } from './labc-reporte-usuarios.component';

describe('LabcReporteUsuariosComponent', () => {
  let component: LabcReporteUsuariosComponent;
  let fixture: ComponentFixture<LabcReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
