import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiAdministrarUsuariosComponent } from './pbi-administrar-usuarios.component';

describe('PbiAdministrarUsuariosComponent', () => {
  let component: PbiAdministrarUsuariosComponent;
  let fixture: ComponentFixture<PbiAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
