import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiConfiguracionCategoriasComponent } from './pbi-configuracion-categorias.component';

describe('PbiConfiguracionCategoriasComponent', () => {
  let component: PbiConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<PbiConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
