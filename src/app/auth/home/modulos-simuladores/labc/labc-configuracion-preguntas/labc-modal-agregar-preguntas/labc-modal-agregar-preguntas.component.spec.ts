import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcModalAgregarPreguntasComponent } from './labc-modal-agregar-preguntas.component';

describe('LabcModalAgregarPreguntasComponent', () => {
  let component: LabcModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<LabcModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
