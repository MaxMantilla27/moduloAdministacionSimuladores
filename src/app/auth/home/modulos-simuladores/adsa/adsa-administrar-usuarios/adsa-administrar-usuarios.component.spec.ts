import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaAdministrarUsuariosComponent } from './adsa-administrar-usuarios.component';

describe('AdsaAdministrarUsuariosComponent', () => {
  let component: AdsaAdministrarUsuariosComponent;
  let fixture: ComponentFixture<AdsaAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
