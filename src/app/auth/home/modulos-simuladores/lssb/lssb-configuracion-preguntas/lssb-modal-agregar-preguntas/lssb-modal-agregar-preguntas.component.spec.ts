import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbModalAgregarPreguntasComponent } from './lssb-modal-agregar-preguntas.component';

describe('LssbModalAgregarPreguntasComponent', () => {
  let component: LssbModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<LssbModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
