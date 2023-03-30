import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogConfiguracionCategoriasComponent } from './tog-configuracion-categorias.component';

describe('TogConfiguracionCategoriasComponent', () => {
  let component: TogConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<TogConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
