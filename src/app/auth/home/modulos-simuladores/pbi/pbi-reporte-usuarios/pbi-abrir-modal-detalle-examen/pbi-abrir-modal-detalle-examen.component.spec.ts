import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiAbrirModalDetalleExamenComponent } from './pbi-abrir-modal-detalle-examen.component';

describe('PbiAbrirModalDetalleExamenComponent', () => {
  let component: PbiAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<PbiAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
