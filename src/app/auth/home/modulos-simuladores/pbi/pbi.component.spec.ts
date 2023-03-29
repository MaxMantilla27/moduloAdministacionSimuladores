import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiComponent } from './pbi.component';

describe('PbiComponent', () => {
  let component: PbiComponent;
  let fixture: ComponentFixture<PbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
