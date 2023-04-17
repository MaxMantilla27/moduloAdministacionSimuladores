import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogModalAlternativasNivelDosComponent } from './tog-modal-alternativas-nivel-dos.component';

describe('TogModalAlternativasNivelDosComponent', () => {
  let component: TogModalAlternativasNivelDosComponent;
  let fixture: ComponentFixture<TogModalAlternativasNivelDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogModalAlternativasNivelDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogModalAlternativasNivelDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
