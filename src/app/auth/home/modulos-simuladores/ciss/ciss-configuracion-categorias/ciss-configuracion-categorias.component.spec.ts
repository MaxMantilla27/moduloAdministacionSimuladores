import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissConfiguracionCategoriasComponent } from './ciss-configuracion-categorias.component';

describe('CissConfiguracionCategoriasComponent', () => {
  let component: CissConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<CissConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
