import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpConfiguracionTipoPreguntasComponent } from './cmrp-configuracion-tipo-preguntas.component';

describe('CmrpConfiguracionTipoPreguntasComponent', () => {
  let component: CmrpConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<CmrpConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
