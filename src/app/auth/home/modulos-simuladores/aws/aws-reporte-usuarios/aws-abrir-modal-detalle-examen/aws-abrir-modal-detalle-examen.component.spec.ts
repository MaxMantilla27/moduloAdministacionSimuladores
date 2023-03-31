import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsAbrirModalDetalleExamenComponent } from './aws-abrir-modal-detalle-examen.component';

describe('AwsAbrirModalDetalleExamenComponent', () => {
  let component: AwsAbrirModalDetalleExamenComponent;
  let fixture: ComponentFixture<AwsAbrirModalDetalleExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsAbrirModalDetalleExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsAbrirModalDetalleExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
