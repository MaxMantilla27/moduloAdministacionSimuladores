import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpConfiguracionCategoriasComponent } from './pacp-configuracion-categorias.component';

describe('PacpConfiguracionCategoriasComponent', () => {
  let component: PacpConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<PacpConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
