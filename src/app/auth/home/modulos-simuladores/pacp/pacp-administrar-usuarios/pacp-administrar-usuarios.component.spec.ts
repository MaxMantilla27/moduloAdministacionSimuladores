import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpAdministrarUsuariosComponent } from './pacp-administrar-usuarios.component';

describe('PacpAdministrarUsuariosComponent', () => {
  let component: PacpAdministrarUsuariosComponent;
  let fixture: ComponentFixture<PacpAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
