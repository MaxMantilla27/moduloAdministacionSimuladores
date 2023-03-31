import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaConfiguracionPreguntasComponent } from './adsa-configuracion-preguntas.component';

describe('AdsaConfiguracionPreguntasComponent', () => {
  let component: AdsaConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<AdsaConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
