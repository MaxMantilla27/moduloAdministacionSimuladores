import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogConfiguracionTipoPreguntasComponent } from './tog-configuracion-tipo-preguntas.component';

describe('TogConfiguracionTipoPreguntasComponent', () => {
  let component: TogConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<TogConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
