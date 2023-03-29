import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpAbrirModalDetalleExamenComponent } from './pacp-abrir-modal-detalle-examen.component';

describe('PacpAbrirModalDetalleExamenComponent', () => {
  let component: PacpAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<PacpAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
