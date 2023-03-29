import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsModalAgregarCategoriaComponent } from './aws-modal-agregar-categoria.component';

describe('AwsModalAgregarCategoriaComponent', () => {
  let component: AwsModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<AwsModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
