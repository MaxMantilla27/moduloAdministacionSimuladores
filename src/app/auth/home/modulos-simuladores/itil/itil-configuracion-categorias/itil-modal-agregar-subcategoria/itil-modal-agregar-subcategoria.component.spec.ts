import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilModalAgregarSubcategoriaComponent } from './itil-modal-agregar-subcategoria.component';

describe('ItilModalAgregarSubcategoriaComponent', () => {
  let component: ItilModalAgregarSubcategoriaComponent;
  let fixture: ComponentFixture<ItilModalAgregarSubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilModalAgregarSubcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilModalAgregarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
