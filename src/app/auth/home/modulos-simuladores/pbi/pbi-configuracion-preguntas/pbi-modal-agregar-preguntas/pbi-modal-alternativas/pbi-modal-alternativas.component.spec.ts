import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiModalAlternativasComponent } from './pbi-modal-alternativas.component';

describe('PbiModalAlternativasComponent', () => {
  let component: PbiModalAlternativasComponent;
  let fixture: ComponentFixture<PbiModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
