import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpModalAgregarSubcategoriaComponent } from './pmp-modal-agregar-subcategoria.component';

describe('PmpModalAgregarSubcategoriaComponent', () => {
  let component: PmpModalAgregarSubcategoriaComponent;
  let fixture: ComponentFixture<PmpModalAgregarSubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpModalAgregarSubcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpModalAgregarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
