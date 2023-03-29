import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsConfiguracionInterfazComponent } from './devops-configuracion-interfaz.component';

describe('DevopsConfiguracionInterfazComponent', () => {
  let component: DevopsConfiguracionInterfazComponent;
  let fixture: ComponentFixture<DevopsConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
