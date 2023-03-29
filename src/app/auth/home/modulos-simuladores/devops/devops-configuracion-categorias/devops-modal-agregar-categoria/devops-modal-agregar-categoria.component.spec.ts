import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsModalAgregarCategoriaComponent } from './devops-modal-agregar-categoria.component';

describe('DevopsModalAgregarCategoriaComponent', () => {
  let component: DevopsModalAgregarCategoriaComponent;
  let fixture: ComponentFixture<DevopsModalAgregarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsModalAgregarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsModalAgregarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
