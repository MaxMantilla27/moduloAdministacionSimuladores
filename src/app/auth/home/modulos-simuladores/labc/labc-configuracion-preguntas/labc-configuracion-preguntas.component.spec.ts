import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcConfiguracionPreguntasComponent } from './labc-configuracion-preguntas.component';

describe('LabcConfiguracionPreguntasComponent', () => {
  let component: LabcConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<LabcConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
