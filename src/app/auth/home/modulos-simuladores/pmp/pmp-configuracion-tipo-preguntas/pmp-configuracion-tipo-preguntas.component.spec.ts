import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpConfiguracionTipoPreguntasComponent } from './pmp-configuracion-tipo-preguntas.component';

describe('PmpConfiguracionTipoPreguntasComponent', () => {
  let component: PmpConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<PmpConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
