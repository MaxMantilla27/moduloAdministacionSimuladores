import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaModalAgregarPreguntasComponent } from './ccna-modal-agregar-preguntas.component';

describe('CcnaModalAgregarPreguntasComponent', () => {
  let component: CcnaModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<CcnaModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
