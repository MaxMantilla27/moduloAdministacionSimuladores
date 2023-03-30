import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpAdministrarUsuariosComponent } from './cmrp-administrar-usuarios.component';

describe('CmrpAdministrarUsuariosComponent', () => {
  let component: CmrpAdministrarUsuariosComponent;
  let fixture: ComponentFixture<CmrpAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
