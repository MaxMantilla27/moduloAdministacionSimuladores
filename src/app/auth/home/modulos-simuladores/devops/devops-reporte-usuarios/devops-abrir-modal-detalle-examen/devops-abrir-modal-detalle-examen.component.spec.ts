import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsAbrirModalDetalleExamendevopdevopComponent } from './devops-abrir-modal-detalle-examendevopdevop.component';

describe('DevopsAbrirModalDetalleExamendevopdevopComponent', () => {
  let component: DevopsAbrirModalDetalleExamendevopdevopComponent;
  let fixture: ComponentFixture<DevopsAbrirModalDetalleExamendevopdevopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsAbrirModalDetalleExamendevopdevopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsAbrirModalDetalleExamendevopdevopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
