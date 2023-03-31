import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaConfiguracionPreguntasComponent } from './ccna-configuracion-preguntas.component';

describe('CcnaConfiguracionPreguntasComponent', () => {
  let component: CcnaConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<CcnaConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
