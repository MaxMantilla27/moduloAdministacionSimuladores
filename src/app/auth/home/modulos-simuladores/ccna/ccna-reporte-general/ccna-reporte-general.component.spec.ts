import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaReporteGeneralComponent } from './ccna-reporte-general.component';

describe('CcnaReporteGeneralComponent', () => {
  let component: CcnaReporteGeneralComponent;
  let fixture: ComponentFixture<CcnaReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
