import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaModalAlternativasComponent } from './ccna-modal-alternativas.component';

describe('CcnaModalAlternativasComponent', () => {
  let component: CcnaModalAlternativasComponent;
  let fixture: ComponentFixture<CcnaModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
