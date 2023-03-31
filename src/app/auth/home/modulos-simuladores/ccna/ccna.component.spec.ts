import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaComponent } from './ccna.component';

describe('CcnaComponent', () => {
  let component: CcnaComponent;
  let fixture: ComponentFixture<CcnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
