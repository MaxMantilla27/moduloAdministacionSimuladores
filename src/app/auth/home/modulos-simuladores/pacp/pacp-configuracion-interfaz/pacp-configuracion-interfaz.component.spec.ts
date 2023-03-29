import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpConfiguracionInterfazComponent } from './pacp-configuracion-interfaz.component';

describe('PacpConfiguracionInterfazComponent', () => {
  let component: PacpConfiguracionInterfazComponent;
  let fixture: ComponentFixture<PacpConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
