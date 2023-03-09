import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpReporteUsuariosComponent } from './pmp-reporte-usuarios.component';

describe('PmpReporteUsuariosComponent', () => {
  let component: PmpReporteUsuariosComponent;
  let fixture: ComponentFixture<PmpReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
