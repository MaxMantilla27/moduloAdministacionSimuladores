import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpConfiguracionCategoriasComponent } from './cmrp-configuracion-categorias.component';

describe('CmrpConfiguracionCategoriasComponent', () => {
  let component: CmrpConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<CmrpConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
