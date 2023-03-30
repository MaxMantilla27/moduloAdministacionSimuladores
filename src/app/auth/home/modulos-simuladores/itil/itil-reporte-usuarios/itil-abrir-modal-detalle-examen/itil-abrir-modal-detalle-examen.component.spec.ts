import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilAbrirModalDetalleExamenComponent } from './itil-abrir-modal-detalle-examen.component';

describe('ItilAbrirModalDetalleExamenComponent', () => {
  let component: ItilAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<ItilAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
