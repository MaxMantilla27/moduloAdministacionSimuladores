import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcConfiguracionCategoriasComponent } from './labc-configuracion-categorias.component';

describe('LabcConfiguracionCategoriasComponent', () => {
  let component: LabcConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<LabcConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
