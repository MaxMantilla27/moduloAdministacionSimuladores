import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpConfiguracionPreguntasComponent } from './pmp-configuracion-preguntas.component';

describe('PmpConfiguracionPreguntasComponent', () => {
  let component: PmpConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<PmpConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
