import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmAdministrarUsuariosComponent } from './capm-administrar-usuarios.component';

describe('CapmAdministrarUsuariosComponent', () => {
  let component: CapmAdministrarUsuariosComponent;
  let fixture: ComponentFixture<CapmAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
