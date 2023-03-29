import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsModalAgregarPreguntasComponent } from './aws-modal-agregar-preguntas.component';

describe('AwsModalAgregarPreguntasComponent', () => {
  let component: AwsModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<AwsModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
