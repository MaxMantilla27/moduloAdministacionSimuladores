import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpConfiguracionTipoPreguntasComponent } from './pacp-configuracion-tipo-preguntas.component';

describe('PacpConfiguracionTipoPreguntasComponent', () => {
  let component: PacpConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<PacpConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
