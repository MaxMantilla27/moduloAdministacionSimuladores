import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsaComponent } from './adsa.component';

describe('AdsaComponent', () => {
  let component: AdsaComponent;
  let fixture: ComponentFixture<AdsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
