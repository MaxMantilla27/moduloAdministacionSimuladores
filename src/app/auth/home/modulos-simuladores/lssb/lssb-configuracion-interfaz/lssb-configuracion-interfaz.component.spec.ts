import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbConfiguracionInterfazComponent } from './lssb-configuracion-interfaz.component';

describe('LssbConfiguracionInterfazComponent', () => {
  let component: LssbConfiguracionInterfazComponent;
  let fixture: ComponentFixture<LssbConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
