import { TestBed } from '@angular/core/testing';

import { CmrpReporteGeneralService } from './cmrp-reporte-general.service';

describe('CmrpReporteGeneralService', () => {
  let service: CmrpReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
