import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissComponent } from './ciss.component';

describe('CissComponent', () => {
  let component: CissComponent;
  let fixture: ComponentFixture<CissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
