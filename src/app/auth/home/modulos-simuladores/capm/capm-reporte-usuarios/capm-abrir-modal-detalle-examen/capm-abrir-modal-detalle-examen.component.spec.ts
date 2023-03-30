import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmAbrirModalDetalleExamenComponent } from './capm-abrir-modal-detalle-examen.component';

describe('CapmAbrirModalDetalleExamenComponent', () => {
  let component: CapmAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<CapmAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
