import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiModalAgregarCategoriaComponent } from './pbi-modal-agregar-categoria.component';

describe('PbiModalAgregarCategoriaComponent', () => {
  let component: PbiModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<PbiModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
