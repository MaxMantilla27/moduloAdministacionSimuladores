import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmReporteUsuariosComponent } from './capm-reporte-usuarios.component';

describe('CapmReporteUsuariosComponent', () => {
  let component: CapmReporteUsuariosComponent;
  let fixture: ComponentFixture<CapmReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
