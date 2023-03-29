import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpConfiguracionPreguntasComponent } from './pacp-configuracion-preguntas.component';

describe('PacpConfiguracionPreguntasComponent', () => {
  let component: PacpConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<PacpConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
