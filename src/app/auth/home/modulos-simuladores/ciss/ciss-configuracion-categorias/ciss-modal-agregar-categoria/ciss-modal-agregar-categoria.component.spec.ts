import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissModalAgregarCategoriaComponent } from './ciss-modal-agregar-categoria.component';

describe('CissModalAgregarCategoriaComponent', () => {
  let component: CissModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<CissModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
