import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsAdministrarUsuariosComponent } from './devops-administrar-usuarios.component';

describe('DevopsAdministrarUsuariosComponent', () => {
  let component: DevopsAdministrarUsuariosComponent;
  let fixture: ComponentFixture<DevopsAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
