import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsConfiguracionInterfazComponent } from './aws-configuracion-interfaz.component';

describe('AwsConfiguracionInterfazComponent', () => {
  let component: AwsConfiguracionInterfazComponent;
  let fixture: ComponentFixture<AwsConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
