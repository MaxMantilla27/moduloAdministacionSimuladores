import { TestBed } from '@angular/core/testing';

import { LabcReporteGeneralService } from './labc-reporte-general.service';

describe('LabcReporteGeneralService', () => {
  let service: LabcReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
