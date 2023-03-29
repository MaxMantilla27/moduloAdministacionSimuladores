import { TestBed } from '@angular/core/testing';

import { CcnaReporteGeneralService } from './ccna-reporte-general.service';

describe('CcnaReporteGeneralService', () => {
  let service: CcnaReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
