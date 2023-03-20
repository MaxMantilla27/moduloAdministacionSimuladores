import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpModalAgregarCategoriaComponent } from './pmp-modal-agregar-categoria.component';

describe('PmpModalAgregarCategoriaComponent', () => {
  let component: PmpModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<PmpModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
