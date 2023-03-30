import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpModalAgregarCategoriaComponent } from './cmrp-modal-agregar-categoria.component';

describe('CmrpModalAgregarCategoriaComponent', () => {
  let component: CmrpModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<CmrpModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
