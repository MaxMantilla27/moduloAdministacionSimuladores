import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpModalAlternativasComponent } from './pacp-modal-alternativas.component';

describe('PacpModalAlternativasComponent', () => {
  let component: PacpModalAlternativasComponent;
  let fixture: ComponentFixture<PacpModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
