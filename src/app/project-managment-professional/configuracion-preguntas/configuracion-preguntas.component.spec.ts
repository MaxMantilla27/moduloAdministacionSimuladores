import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPreguntasComponent } from './configuracion-preguntas.component';

describe('ConfiguracionPreguntasComponent', () => {
  let component: ConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<ConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
