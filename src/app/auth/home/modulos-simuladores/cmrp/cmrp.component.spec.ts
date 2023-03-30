import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpComponent } from './cmrp.component';

describe('CmrpComponent', () => {
  let component: CmrpComponent;
  let fixture: ComponentFixture<CmrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
