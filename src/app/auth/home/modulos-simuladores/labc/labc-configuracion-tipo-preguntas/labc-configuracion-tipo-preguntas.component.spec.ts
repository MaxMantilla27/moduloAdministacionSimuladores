import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcConfiguracionTipoPreguntasComponent } from './labc-configuracion-tipo-preguntas.component';

describe('LabcConfiguracionTipoPreguntasComponent', () => {
  let component: LabcConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<LabcConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
