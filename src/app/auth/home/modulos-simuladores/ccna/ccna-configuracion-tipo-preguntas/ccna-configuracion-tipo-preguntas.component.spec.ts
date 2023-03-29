import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaConfiguracionTipoPreguntasComponent } from './ccna-configuracion-tipo-preguntas.component';

describe('CcnaConfiguracionTipoPreguntasComponent', () => {
  let component: CcnaConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<CcnaConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
