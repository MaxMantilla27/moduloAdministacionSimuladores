import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogModalAgregarPreguntasComponent } from './tog-modal-agregar-preguntas.component';

describe('TogModalAgregarPreguntasComponent', () => {
  let component: TogModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<TogModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
