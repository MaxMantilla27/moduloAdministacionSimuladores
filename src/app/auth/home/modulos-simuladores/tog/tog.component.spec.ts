import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogComponent } from './tog.component';

describe('TogComponent', () => {
  let component: TogComponent;
  let fixture: ComponentFixture<TogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
