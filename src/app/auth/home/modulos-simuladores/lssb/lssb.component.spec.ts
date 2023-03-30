import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssbComponent } from './lssb.component';

describe('LssbComponent', () => {
  let component: LssbComponent;
  let fixture: ComponentFixture<LssbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LssbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
