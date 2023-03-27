import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsReporteGeneralComponent } from './aws-reporte-general.component';

describe('AwsReporteGeneralComponent', () => {
  let component: AwsReporteGeneralComponent;
  let fixture: ComponentFixture<AwsReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
