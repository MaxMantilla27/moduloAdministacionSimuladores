import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmConfiguracionPreguntasComponent } from './capm-configuracion-preguntas.component';

describe('CapmConfiguracionPreguntasComponent', () => {
  let component: CapmConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<CapmConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
