import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpConfiguracionPreguntasComponent } from './cmrp-configuracion-preguntas.component';

describe('CmrpConfiguracionPreguntasComponent', () => {
  let component: CmrpConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<CmrpConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
