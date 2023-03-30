import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilConfiguracionPreguntasComponent } from './itil-configuracion-preguntas.component';

describe('ItilConfiguracionPreguntasComponent', () => {
  let component: ItilConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<ItilConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
