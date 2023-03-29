import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaReporteGeneralComponent } from './adsa-reporte-general.component';

describe('AdsaReporteGeneralComponent', () => {
  let component: AdsaReporteGeneralComponent;
  let fixture: ComponentFixture<AdsaReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
