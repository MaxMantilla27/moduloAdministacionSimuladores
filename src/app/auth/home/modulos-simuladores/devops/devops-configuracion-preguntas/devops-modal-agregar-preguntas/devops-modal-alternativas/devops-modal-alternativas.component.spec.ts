import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsModalAlternativasComponent } from './devops-modal-alternativas.component';

describe('DevopsModalAlternativasComponent', () => {
  let component: DevopsModalAlternativasComponent;
  let fixture: ComponentFixture<DevopsModalAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsModalAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsModalAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
