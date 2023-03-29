import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaConfiguracionCategoriasComponent } from './ccna-configuracion-categorias.component';

describe('CcnaConfiguracionCategoriasComponent', () => {
  let component: CcnaConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<CcnaConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
