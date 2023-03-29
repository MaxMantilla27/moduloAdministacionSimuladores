import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissReporteGeneralComponent } from './ciss-reporte-general.component';

describe('CissReporteGeneralComponent', () => {
  let component: CissReporteGeneralComponent;
  let fixture: ComponentFixture<CissReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
