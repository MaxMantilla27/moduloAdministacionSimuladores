import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissConfiguracionInterfazComponent } from './ciss-configuracion-interfaz.component';

describe('CissConfiguracionInterfazComponent', () => {
  let component: CissConfiguracionInterfazComponent;
  let fixture: ComponentFixture<CissConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
