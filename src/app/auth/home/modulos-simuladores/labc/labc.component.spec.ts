import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcComponent } from './labc.component';

describe('LabcComponent', () => {
  let component: LabcComponent;
  let fixture: ComponentFixture<LabcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
