import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaModalAgregarCategoriaComponent } from './ccna-modal-agregar-categoria.component';

describe('CcnaModalAgregarCategoriaComponent', () => {
  let component: CcnaModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<CcnaModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
