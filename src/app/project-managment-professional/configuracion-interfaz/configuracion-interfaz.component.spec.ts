import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionInterfazComponent } from './configuracion-interfaz.component';

describe('ConfiguracionInterfazComponent', () => {
  let component: ConfiguracionInterfazComponent;
  let fixture: ComponentFixture<ConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
