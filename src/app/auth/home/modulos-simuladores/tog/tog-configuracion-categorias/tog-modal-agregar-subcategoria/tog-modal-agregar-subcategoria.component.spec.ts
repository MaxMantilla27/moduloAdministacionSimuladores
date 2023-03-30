import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogModalAgregarSubcategoriaComponent } from './tog-modal-agregar-subcategoria.component';

describe('TogModalAgregarSubcategoriaComponent', () => {
  let component: TogModalAgregarSubcategoriaComponent;
  let fixture: ComponentFixture<TogModalAgregarSubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogModalAgregarSubcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogModalAgregarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
