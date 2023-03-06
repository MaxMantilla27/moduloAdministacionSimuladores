import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionTipoPreguntasComponent } from './configuracion-tipo-preguntas.component';

describe('ConfiguracionTipoPreguntasComponent', () => {
  let component: ConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<ConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
