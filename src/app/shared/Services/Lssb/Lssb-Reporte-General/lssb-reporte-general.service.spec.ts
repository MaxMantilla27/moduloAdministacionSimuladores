import { TestBed } from '@angular/core/testing';

import { LssbReporteGeneralService } from './lssb-reporte-general.service';

describe('LssbReporteGeneralService', () => {
  let service: LssbReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
