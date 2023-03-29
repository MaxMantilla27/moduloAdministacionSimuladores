import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissConfiguracionTipoPreguntasComponent } from './ciss-configuracion-tipo-preguntas.component';

describe('CissConfiguracionTipoPreguntasComponent', () => {
  let component: CissConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<CissConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
