import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbReporteUsuariosComponent } from './lssb-reporte-usuarios.component';

describe('LssbReporteUsuariosComponent', () => {
  let component: LssbReporteUsuariosComponent;
  let fixture: ComponentFixture<LssbReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
