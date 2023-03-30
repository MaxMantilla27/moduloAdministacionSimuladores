import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpConfiguracionInterfazComponent } from './cmrp-configuracion-interfaz.component';

describe('CmrpConfiguracionInterfazComponent', () => {
  let component: CmrpConfiguracionInterfazComponent;
  let fixture: ComponentFixture<CmrpConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
