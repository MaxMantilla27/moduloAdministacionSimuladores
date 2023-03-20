import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpConfiguracionInterfazComponent } from './pmp-configuracion-interfaz.component';

describe('PmpConfiguracionInterfazComponent', () => {
  let component: PmpConfiguracionInterfazComponent;
  let fixture: ComponentFixture<PmpConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
