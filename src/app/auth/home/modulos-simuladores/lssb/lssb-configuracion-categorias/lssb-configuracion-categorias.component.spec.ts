import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbConfiguracionCategoriasComponent } from './lssb-configuracion-categorias.component';

describe('LssbConfiguracionCategoriasComponent', () => {
  let component: LssbConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<LssbConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
