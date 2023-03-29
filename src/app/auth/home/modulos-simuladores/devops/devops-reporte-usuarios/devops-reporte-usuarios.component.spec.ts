import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsReporteUsuariosComponent } from './devops-reporte-usuarios.component';

describe('DevopsReporteUsuariosComponent', () => {
  let component: DevopsReporteUsuariosComponent;
  let fixture: ComponentFixture<DevopsReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
