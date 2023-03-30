import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmConfiguracionCategoriasComponent } from './capm-configuracion-categorias.component';

describe('CapmConfiguracionCategoriasComponent', () => {
  let component: CapmConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<CapmConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
