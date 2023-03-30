import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilAdministrarUsuariosComponent } from './itil-administrar-usuarios.component';

describe('ItilAdministrarUsuariosComponent', () => {
  let component: ItilAdministrarUsuariosComponent;
  let fixture: ComponentFixture<ItilAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
