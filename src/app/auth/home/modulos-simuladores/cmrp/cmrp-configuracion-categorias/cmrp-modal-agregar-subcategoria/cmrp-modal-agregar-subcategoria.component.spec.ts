import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpModalAgregarSubcategoriaComponent } from './cmrp-modal-agregar-subcategoria.component';

describe('CmrpModalAgregarSubcategoriaComponent', () => {
  let component: CmrpModalAgregarSubcategoriaComponent;
  let fixture: ComponentFixture<CmrpModalAgregarSubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpModalAgregarSubcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpModalAgregarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
