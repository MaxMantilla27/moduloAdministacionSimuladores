import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaModalAgregarCategoriaComponent } from './adsa-modal-agregar-categoria.component';

describe('AdsaModalAgregarCategoriaComponent', () => {
  let component: AdsaModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<AdsaModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
