import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpModalAgregarPreguntasComponent } from './cmrp-modal-agregar-preguntas.component';

describe('CmrpModalAgregarPreguntasComponent', () => {
  let component: CmrpModalAgregarPreguntasComponent;
  let fixture: ComponentFixture<CmrpModalAgregarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpModalAgregarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpModalAgregarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
