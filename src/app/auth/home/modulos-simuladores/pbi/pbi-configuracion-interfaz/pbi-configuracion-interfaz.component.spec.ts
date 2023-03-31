import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiConfiguracionInterfazComponent } from './pbi-configuracion-interfaz.component';

describe('PbiConfiguracionInterfazComponent', () => {
  let component: PbiConfiguracionInterfazComponent;
  let fixture: ComponentFixture<PbiConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
