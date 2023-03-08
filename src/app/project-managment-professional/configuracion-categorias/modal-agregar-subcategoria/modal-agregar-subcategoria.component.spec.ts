import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarSubcategoriaComponent } from './modal-agregar-subcategoria.component';

describe('ModalAgregarSubcategoriaComponent', () => {
  let component: ModalAgregarSubcategoriaComponent;
  let fixture: ComponentFixture<ModalAgregarSubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarSubcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
