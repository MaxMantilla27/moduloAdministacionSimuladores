import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogReporteGeneralComponent } from './tog-reporte-general.component';

describe('TogReporteGeneralComponent', () => {
  let component: TogReporteGeneralComponent;
  let fixture: ComponentFixture<TogReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
