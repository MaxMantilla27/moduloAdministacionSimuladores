import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogModalAgregarCategoriaComponent } from './tog-modal-agregar-categoria.component';

describe('TogModalAgregarCategoriaComponent', () => {
  let component: TogModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<TogModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
