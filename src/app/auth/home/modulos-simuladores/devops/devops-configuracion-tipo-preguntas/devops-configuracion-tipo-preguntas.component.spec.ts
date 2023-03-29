import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsConfiguracionTipoPreguntasComponent } from './devops-configuracion-tipo-preguntas.component';

describe('DevopsConfiguracionTipoPreguntasComponent', () => {
  let component: DevopsConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<DevopsConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
