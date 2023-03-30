import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmModalAlternativasComponent } from './capm-modal-alternativas.component';

describe('CapmModalAlternativasComponent', () => {
  let component: CapmModalAlternativasComponent;
  let fixture: ComponentFixture<CapmModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
