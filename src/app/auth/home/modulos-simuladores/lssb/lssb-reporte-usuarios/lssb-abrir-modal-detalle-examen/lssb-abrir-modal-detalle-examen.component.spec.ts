import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbAbrirModalDetalleExamenComponent } from './lssb-abrir-modal-detalle-examen.component';

describe('LssbAbrirModalDetalleExamenComponent', () => {
  let component: LssbAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<LssbAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
