import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilReporteGeneralComponent } from './itil-reporte-general.component';

describe('ItilReporteGeneralComponent', () => {
  let component: ItilReporteGeneralComponent;
  let fixture: ComponentFixture<ItilReporteGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilReporteGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
