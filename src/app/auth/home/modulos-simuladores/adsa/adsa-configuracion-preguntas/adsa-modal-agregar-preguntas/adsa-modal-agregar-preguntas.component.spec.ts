import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaModalAgregarPreguntasComponent } from './adsa-modal-agregar-preguntas.component';

describe('AdsaModalAgregarPreguntasComponent', () => {
  let component: AdsaModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<AdsaModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
