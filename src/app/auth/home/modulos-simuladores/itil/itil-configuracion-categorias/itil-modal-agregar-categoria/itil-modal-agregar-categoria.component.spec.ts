import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilModalAgregarCategoriaComponent } from './itil-modal-agregar-categoria.component';

describe('ItilModalAgregarCategoriaComponent', () => {
  let component: ItilModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<ItilModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
