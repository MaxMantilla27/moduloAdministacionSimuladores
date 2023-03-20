import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpAdministrarUsuariosComponent } from './pmp-administrar-usuarios.component';

describe('PmpAdministrarUsuariosComponent', () => {
  let component: PmpAdministrarUsuariosComponent;
  let fixture: ComponentFixture<PmpAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
