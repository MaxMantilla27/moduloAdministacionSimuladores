import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogConfiguracionInterfazComponent } from './tog-configuracion-interfaz.component';

describe('TogConfiguracionInterfazComponent', () => {
  let component: TogConfiguracionInterfazComponent;
  let fixture: ComponentFixture<TogConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
