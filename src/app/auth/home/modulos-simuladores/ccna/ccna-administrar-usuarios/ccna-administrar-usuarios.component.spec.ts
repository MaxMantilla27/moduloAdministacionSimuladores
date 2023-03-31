import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaAdministrarUsuariosComponent } from './ccna-administrar-usuarios.component';

describe('CcnaAdministrarUsuariosComponent', () => {
  let component: CcnaAdministrarUsuariosComponent;
  let fixture: ComponentFixture<CcnaAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
