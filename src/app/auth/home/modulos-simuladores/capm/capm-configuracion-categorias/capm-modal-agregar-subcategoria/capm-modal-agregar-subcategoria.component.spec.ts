import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmModalAgregarSubcategoriaComponent } from './capm-modal-agregar-subcategoria.component';

describe('CapmModalAgregarSubcategoriaComponent', () => {
  let component: CapmModalAgregarSubcategoriaComponent;
  let fixture: ComponentFixture<CapmModalAgregarSubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmModalAgregarSubcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmModalAgregarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
