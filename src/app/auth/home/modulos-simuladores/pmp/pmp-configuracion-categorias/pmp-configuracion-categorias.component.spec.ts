import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpConfiguracionCategoriasComponent } from './pmp-configuracion-categorias.component';

describe('PmpConfiguracionCategoriasComponent', () => {
  let component: PmpConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<PmpConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
