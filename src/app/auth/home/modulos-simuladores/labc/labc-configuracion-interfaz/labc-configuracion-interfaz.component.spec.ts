import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcConfiguracionInterfazComponent } from './labc-configuracion-interfaz.component';

describe('LabcConfiguracionInterfazComponent', () => {
  let component: LabcConfiguracionInterfazComponent;
  let fixture: ComponentFixture<LabcConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
