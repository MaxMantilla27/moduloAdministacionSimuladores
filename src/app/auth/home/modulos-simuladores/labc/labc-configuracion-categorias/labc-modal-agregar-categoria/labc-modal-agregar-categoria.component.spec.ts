import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcModalAgregarCategoriaComponent } from './labc-modal-agregar-categoria.component';

describe('LabcModalAgregarCategoriaComponent', () => {
  let component: LabcModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<LabcModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
