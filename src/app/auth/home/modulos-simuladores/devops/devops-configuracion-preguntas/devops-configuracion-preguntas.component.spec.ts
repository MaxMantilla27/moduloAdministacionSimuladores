import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsConfiguracionPreguntasComponent } from './devops-configuracion-preguntas.component';

describe('DevopsConfiguracionPreguntasComponent', () => {
  let component: DevopsConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<DevopsConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
