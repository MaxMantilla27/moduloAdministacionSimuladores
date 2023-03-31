import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaModalAlternativasComponent } from './adsa-modal-alternativas.component';

describe('AdsaModalAlternativasComponent', () => {
  let component: AdsaModalAlternativasComponent;
  let fixture: ComponentFixture<AdsaModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
