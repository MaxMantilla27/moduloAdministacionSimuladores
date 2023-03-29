import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpModalAgregarPreguntasComponent } from './pacp-modal-agregar-preguntas.component';

describe('PacpModalAgregarPreguntasComponent', () => {
  let component: PacpModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<PacpModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
