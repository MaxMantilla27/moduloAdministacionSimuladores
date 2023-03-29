import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsModalAgregarPreguntasComponent } from './devops-modal-agregar-preguntas.component';

describe('DevopsModalAgregarPreguntasComponent', () => {
  let component: DevopsModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<DevopsModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
