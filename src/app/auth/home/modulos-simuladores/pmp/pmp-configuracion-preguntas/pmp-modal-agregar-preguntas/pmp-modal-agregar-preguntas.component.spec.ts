import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpModalAgregarPreguntasComponent } from './pmp-modal-agregar-preguntas.component';

describe('PmpModalAgregarCategoriaComponent', () => {
  let component: PmpModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<PmpModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
