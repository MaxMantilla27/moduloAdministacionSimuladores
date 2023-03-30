import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogReporteUsuariosComponent } from './tog-reporte-usuarios.component';

describe('TogReporteUsuariosComponent', () => {
  let component: TogReporteUsuariosComponent;
  let fixture: ComponentFixture<TogReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
