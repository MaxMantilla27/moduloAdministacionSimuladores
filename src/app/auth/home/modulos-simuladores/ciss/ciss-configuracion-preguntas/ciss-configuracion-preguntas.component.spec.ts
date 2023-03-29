import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissConfiguracionPreguntasComponent } from './ciss-configuracion-preguntas.component';

describe('CissConfiguracionPreguntasComponent', () => {
  let component: CissConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<CissConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
