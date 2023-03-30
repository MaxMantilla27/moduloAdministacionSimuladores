import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogModalAlternativasComponent } from './tog-modal-alternativas.component';

describe('TogModalAlternativasComponent', () => {
  let component: TogModalAlternativasComponent;
  let fixture: ComponentFixture<TogModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
