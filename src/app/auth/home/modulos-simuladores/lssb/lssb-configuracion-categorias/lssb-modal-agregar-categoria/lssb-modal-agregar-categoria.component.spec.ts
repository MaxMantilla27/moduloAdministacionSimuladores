import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbModalAgregarCategoriaComponent } from './lssb-modal-agregar-categoria.component';

describe('LssbModalAgregarCategoriaComponent', () => {
  let component: LssbModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<LssbModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
