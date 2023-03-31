import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsModalAlternativasComponent } from './aws-modal-alternativas.component';

describe('AwsModalAlternativasComponent', () => {
  let component: AwsModalAlternativasComponent;
  let fixture: ComponentFixture<AwsModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
