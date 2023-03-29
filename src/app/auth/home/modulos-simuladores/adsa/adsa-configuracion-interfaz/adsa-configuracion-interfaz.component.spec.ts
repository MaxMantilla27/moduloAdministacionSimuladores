import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaConfiguracionInterfazComponent } from './adsa-configuracion-interfaz.component';

describe('AdsaConfiguracionInterfazComponent', () => {
  let component: AdsaConfiguracionInterfazComponent;
  let fixture: ComponentFixture<AdsaConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
