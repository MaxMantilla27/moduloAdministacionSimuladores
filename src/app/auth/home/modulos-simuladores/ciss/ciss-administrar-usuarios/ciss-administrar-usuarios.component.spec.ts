import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissAdministrarUsuariosComponent } from './ciss-administrar-usuarios.component';

describe('CissAdministrarUsuariosComponent', () => {
  let component: CissAdministrarUsuariosComponent;
  let fixture: ComponentFixture<CissAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
