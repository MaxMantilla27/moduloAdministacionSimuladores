import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcModalAlternativasComponent } from './labc-modal-alternativas.component';

describe('LabcModalAlternativasComponent', () => {
  let component: LabcModalAlternativasComponent;
  let fixture: ComponentFixture<LabcModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
