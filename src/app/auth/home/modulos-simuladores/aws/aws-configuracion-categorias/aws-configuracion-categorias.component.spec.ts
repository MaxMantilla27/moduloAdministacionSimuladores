import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsConfiguracionCategoriasComponent } from './aws-configuracion-categorias.component';

describe('AwsConfiguracionCategoriasComponent', () => {
  let component: AwsConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<AwsConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
