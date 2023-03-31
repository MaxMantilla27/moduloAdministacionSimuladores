import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsConfiguracionPreguntasComponent } from './aws-configuracion-preguntas.component';

describe('AwsConfiguracionPreguntasComponent', () => {
  let component: AwsConfiguracionPreguntasComponent;
  let fixture: ComponentFixture<AwsConfiguracionPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsConfiguracionPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsConfiguracionPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
