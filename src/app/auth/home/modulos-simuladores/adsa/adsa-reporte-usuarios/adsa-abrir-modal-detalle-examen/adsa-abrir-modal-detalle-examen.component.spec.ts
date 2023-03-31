import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaAbrirModalDetalleExamenComponent } from './adsa-abrir-modal-detalle-examen.component';

describe('AdsaAbrirModalDetalleExamenComponent', () => {
  let component: AdsaAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<AdsaAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
