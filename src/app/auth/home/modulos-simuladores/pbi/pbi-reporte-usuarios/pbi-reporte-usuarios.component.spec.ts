import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiReporteUsuariosComponent } from './pbi-reporte-usuarios.component';

describe('PbiReporteUsuariosComponent', () => {
  let component: PbiReporteUsuariosComponent;
  let fixture: ComponentFixture<PbiReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
