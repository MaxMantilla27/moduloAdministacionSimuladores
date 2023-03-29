import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcAbrirModalDetalleExamendevopdevopComponent } from './labc-abrir-modal-detalle-examendevopdevop.component';

describe('LabcAbrirModalDetalleExamendevopdevopComponent', () => {
  let component: LabcAbrirModalDetalleExamendevopdevopComponent;
  let fixture: ComponentFixture<LabcAbrirModalDetalleExamendevopdevopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcAbrirModalDetalleExamendevopdevopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcAbrirModalDetalleExamendevopdevopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
