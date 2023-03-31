import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiConfiguracionPreguntasComponent } from './pbi-configuracion-preguntas.component';

describe('PbiConfiguracionPreguntasComponent', () => {
  let component: PbiConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<PbiConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
