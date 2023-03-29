import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsConfiguracionCategoriasComponent } from './devops-configuracion-categorias.component';

describe('DevopsConfiguracionCategoriasComponent', () => {
  let component: DevopsConfiguracionCategoriasComponent;
  let fixture: ComponentFixture<DevopsConfiguracionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsConfiguracionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsConfiguracionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
