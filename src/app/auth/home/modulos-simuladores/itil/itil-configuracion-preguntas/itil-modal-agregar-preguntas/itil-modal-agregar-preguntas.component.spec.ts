import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilModalAgregarPreguntasComponent } from './itil-modal-agregar-preguntas.component';

describe('ItilModalAgregarPreguntasComponent', () => {
  let component: ItilModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<ItilModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
