import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmConfiguracionInterfazComponent } from './capm-configuracion-interfaz.component';

describe('CapmConfiguracionInterfazComponent', () => {
  let component: CapmConfiguracionInterfazComponent;
  let fixture: ComponentFixture<CapmConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
