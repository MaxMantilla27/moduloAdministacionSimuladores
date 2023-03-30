import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilConfiguracionTipoPreguntasComponent } from './itil-configuracion-tipo-preguntas.component';

describe('ItilConfiguracionTipoPreguntasComponent', () => {
  let component: ItilConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<ItilConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
