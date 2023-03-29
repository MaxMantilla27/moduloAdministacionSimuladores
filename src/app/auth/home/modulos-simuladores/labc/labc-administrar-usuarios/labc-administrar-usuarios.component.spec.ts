import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcAdministrarUsuariosComponent } from './labc-administrar-usuarios.component';

describe('LabcAdministrarUsuariosComponent', () => {
  let component: LabcAdministrarUsuariosComponent;
  let fixture: ComponentFixture<LabcAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
