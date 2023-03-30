import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogAdministrarUsuariosComponent } from './tog-administrar-usuarios.component';

describe('TogAdministrarUsuariosComponent', () => {
  let component: TogAdministrarUsuariosComponent;
  let fixture: ComponentFixture<TogAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
