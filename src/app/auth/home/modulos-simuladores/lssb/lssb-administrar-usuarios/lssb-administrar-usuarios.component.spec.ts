import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbAdministrarUsuariosComponent } from './lssb-administrar-usuarios.component';

describe('LssbAdministrarUsuariosComponent', () => {
  let component: LssbAdministrarUsuariosComponent;
  let fixture: ComponentFixture<LssbAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
