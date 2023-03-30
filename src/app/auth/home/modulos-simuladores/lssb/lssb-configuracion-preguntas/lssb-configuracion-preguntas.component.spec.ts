import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbConfiguracionPreguntasComponent } from './lssb-configuracion-preguntas.component';

describe('LssbConfiguracionPreguntasComponent', () => {
  let component: LssbConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<LssbConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
