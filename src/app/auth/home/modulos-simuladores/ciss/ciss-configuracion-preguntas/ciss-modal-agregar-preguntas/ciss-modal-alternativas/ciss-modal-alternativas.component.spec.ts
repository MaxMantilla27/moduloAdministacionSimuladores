import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissModalAlternativasComponent } from './ciss-modal-alternativas.component';

describe('CissModalAlternativasComponent', () => {
  let component: CissModalAlternativasComponent;
  let fixture: ComponentFixture<CissModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
