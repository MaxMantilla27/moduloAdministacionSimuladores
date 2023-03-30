import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmModalAgregarPreguntasComponent } from './capm-modal-agregar-preguntas.component';

describe('CapmModalAgregarPreguntasComponent', () => {
  let component: CapmModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<CapmModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
