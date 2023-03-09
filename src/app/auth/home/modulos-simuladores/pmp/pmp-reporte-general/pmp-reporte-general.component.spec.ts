import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpReporteGeneralComponent } from './pmp-reporte-general.component';

describe('PmpReporteGeneralComponent', () => {
  let component: PmpReporteGeneralComponent;
  let fixture: ComponentFixture<PmpReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
