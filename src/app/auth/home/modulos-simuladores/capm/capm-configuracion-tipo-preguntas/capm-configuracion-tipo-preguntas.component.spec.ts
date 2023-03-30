import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmConfiguracionTipoPreguntasComponent } from './capm-configuracion-tipo-preguntas.component';

describe('CapmConfiguracionTipoPreguntasComponent', () => {
  let component: CapmConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<CapmConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
