import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilConfiguracionCategoriasComponent } from './itil-configuracion-categorias.component';

describe('ItilConfiguracionCategoriasComponent', () => {
  let component: ItilConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<ItilConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
