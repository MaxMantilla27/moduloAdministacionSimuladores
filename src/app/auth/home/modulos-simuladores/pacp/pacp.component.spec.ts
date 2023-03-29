import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacpComponent } from './pacp.component';

describe('PacpComponent', () => {
  let component: PacpComponent;
  let fixture: ComponentFixture<PacpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
