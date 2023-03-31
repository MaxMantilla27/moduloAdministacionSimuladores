import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaConfiguracionInterfazComponent } from './ccna-configuracion-interfaz.component';

describe('CcnaConfiguracionInterfazComponent', () => {
  let component: CcnaConfiguracionInterfazComponent;
  let fixture: ComponentFixture<CcnaConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
