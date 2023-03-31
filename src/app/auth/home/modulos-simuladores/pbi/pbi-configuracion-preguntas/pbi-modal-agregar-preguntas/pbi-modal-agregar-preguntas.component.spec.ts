import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiModalAgregarPreguntasComponent } from './pbi-modal-agregar-preguntas.component';

describe('PbiModalAgregarPreguntasComponent', () => {
  let component: PbiModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<PbiModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
