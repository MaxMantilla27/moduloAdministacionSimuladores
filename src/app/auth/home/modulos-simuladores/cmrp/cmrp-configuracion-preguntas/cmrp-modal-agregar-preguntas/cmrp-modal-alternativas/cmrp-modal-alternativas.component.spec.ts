import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpModalAlternativasComponent } from './cmrp-modal-alternativas.component';

describe('CmrpModalAlternativasComponent', () => {
  let component: CmrpModalAlternativasComponent;
  let fixture: ComponentFixture<CmrpModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
