import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpReporteUsuariosComponent } from './pacp-reporte-usuarios.component';

describe('PacpReporteUsuariosComponent', () => {
  let component: PacpReporteUsuariosComponent;
  let fixture: ComponentFixture<PacpReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
