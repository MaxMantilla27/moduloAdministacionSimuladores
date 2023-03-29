import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaConfiguracionCategoriasComponent } from './adsa-configuracion-categorias.component';

describe('AdsaConfiguracionCategoriasComponent', () => {
  let component: AdsaConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<AdsaConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
