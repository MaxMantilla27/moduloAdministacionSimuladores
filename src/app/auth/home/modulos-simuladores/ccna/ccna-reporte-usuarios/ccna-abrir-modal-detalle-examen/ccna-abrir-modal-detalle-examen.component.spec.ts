import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaAbrirModalDetalleExamenComponent } from './ccna-abrir-modal-detalle-examen.component';

describe('CcnaAbrirModalDetalleExamenComponent', () => {
  let component: CcnaAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<CcnaAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
