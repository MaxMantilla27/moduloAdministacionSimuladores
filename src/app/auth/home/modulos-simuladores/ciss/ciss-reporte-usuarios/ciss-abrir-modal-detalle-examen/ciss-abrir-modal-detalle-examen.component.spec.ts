import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissAbrirModalDetalleExamenComponent } from './ciss-abrir-modal-detalle-examen.component';

describe('CissAbrirModalDetalleExamenComponent', () => {
  let component: CissAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<CissAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
