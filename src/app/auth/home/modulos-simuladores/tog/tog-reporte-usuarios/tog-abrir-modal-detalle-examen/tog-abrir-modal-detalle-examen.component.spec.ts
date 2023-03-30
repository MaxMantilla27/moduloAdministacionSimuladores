import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogAbrirModalDetalleExamenComponent } from './tog-abrir-modal-detalle-examen.component';

describe('TogAbrirModalDetalleExamenComponent', () => {
  let component: TogAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<TogAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
