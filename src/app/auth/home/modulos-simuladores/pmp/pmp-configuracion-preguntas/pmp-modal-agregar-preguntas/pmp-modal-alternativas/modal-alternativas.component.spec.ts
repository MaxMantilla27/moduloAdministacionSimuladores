import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlternativasComponent } from './modal-alternativas.component';

describe('ModalAlternativasComponent', () => {
  let component: ModalAlternativasComponent;
  let fixture: ComponentFixture<ModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
