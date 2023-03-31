import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsModalAgregarCategoriasComponent } from './aws-modal-agregar-categoria.component';

describe('AwsModalAgregarCategoriaComponent', () => {
  let component: AwsModalAgregarCategoriasComponent;
  let fixture: ComponentFixture<AwsModalAgregarCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsModalAgregarCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsModalAgregarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
