import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiConfiguracionTipoPreguntasComponent } from './pbi-configuracion-tipo-preguntas.component';

describe('PbiConfiguracionTipoPreguntasComponent', () => {
  let component: PbiConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<PbiConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
