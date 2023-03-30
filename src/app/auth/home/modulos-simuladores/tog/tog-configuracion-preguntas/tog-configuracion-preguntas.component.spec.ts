import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogConfiguracionPreguntasComponent } from './tog-configuracion-preguntas.component';

describe('TogConfiguracionPreguntasComponent', () => {
  let component: TogConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<TogConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
