import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaConfiguracionTipoPreguntasComponent } from './adsa-configuracion-tipo-preguntas.component';

describe('AdsaConfiguracionTipoPreguntasComponent', () => {
  let component: AdsaConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<AdsaConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
