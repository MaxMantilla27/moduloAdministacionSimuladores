import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbModalAgregarSubcategoriaComponent } from './lssb-modal-agregar-subcategoria.component';

describe('LssbModalAgregarSubcategoriaComponent', () => {
  let component: LssbModalAgregarSubcategoriaComponent;
  let fixture: ComponentFixture<LssbModalAgregarSubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbModalAgregarSubcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbModalAgregarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
