import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpReporteGeneralComponent } from './cmrp-reporte-general.component';

describe('CmrpReporteGeneralComponent', () => {
  let component: CmrpReporteGeneralComponent;
  let fixture: ComponentFixture<CmrpReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
