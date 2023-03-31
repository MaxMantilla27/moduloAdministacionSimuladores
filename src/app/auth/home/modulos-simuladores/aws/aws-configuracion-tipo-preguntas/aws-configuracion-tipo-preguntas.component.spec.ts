import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsConfiguracionTipoPreguntasComponent } from './aws-configuracion-tipo-preguntas.component';

describe('AwsConfiguracionTipoPreguntasComponent', () => {
  let component: AwsConfiguracionTipoPreguntasComponent;
  let fixture: ComponentFixture<AwsConfiguracionTipoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsConfiguracionTipoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsConfiguracionTipoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
