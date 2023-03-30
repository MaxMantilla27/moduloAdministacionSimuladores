import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbModalAlternativasComponent } from './lssb-modal-alternativas.component';

describe('LssbModalAlternativasComponent', () => {
  let component: LssbModalAlternativasComponent;
  let fixture: ComponentFixture<LssbModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
