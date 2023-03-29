import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissModalAgregarPreguntasComponent } from './ciss-modal-agregar-preguntas.component';

describe('CissModalAgregarPreguntasComponent', () => {
  let component: CissModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<CissModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
