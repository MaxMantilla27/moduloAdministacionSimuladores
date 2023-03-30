import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpAbrirModalDetalleExamenComponent } from './cmrp-abrir-modal-detalle-examen.component';

describe('CmrpAbrirModalDetalleExamenComponent', () => {
  let component: CmrpAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<CmrpAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
