import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilModalAlternativasComponent } from './itil-modal-alternativas.component';

describe('ItilModalAlternativasComponent', () => {
  let component: ItilModalAlternativasComponent;
  let fixture: ComponentFixture<ItilModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
