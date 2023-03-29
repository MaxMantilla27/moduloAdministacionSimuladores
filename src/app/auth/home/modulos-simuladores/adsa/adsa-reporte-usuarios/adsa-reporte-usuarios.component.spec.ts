import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaReporteUsuariosComponent } from './adsa-reporte-usuarios.component';

describe('AdsaReporteUsuariosComponent', () => {
  let component: AdsaReporteUsuariosComponent;
  let fixture: ComponentFixture<AdsaReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
