import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpAbrirModalDetalleExamenComponent } from './pmp-abrir-modal-detalle-examen.component';

describe('PmpAbrirModalDetalleExamenComponent', () => {
  let component: PmpAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<PmpAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
