import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpModalAgregarCategoriaComponent } from './pacp-modal-agregar-categoria.component';

describe('PacpModalAgregarCategoriaComponent', () => {
  let component: PacpModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<PacpModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
