import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiReporteGeneralComponent } from './pbi-reporte-general.component';

describe('PbiReporteGeneralComponent', () => {
  let component: PbiReporteGeneralComponent;
  let fixture: ComponentFixture<PbiReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
