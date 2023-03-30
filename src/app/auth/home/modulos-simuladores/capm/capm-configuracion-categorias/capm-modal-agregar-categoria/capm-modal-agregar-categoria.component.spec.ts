import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmModalAgregarCategoriaComponent } from './capm-modal-agregar-categoria.component';

describe('CapmModalAgregarCategoriaComponent', () => {
  let component: CapmModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<CapmModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
