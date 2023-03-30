import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbConfiguracionTipoPreguntasComponent } from './lssb-configuracion-tipo-preguntas.component';

describe('LssbConfiguracionTipoPreguntasComponent', () => {
  let component: LssbConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<LssbConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
