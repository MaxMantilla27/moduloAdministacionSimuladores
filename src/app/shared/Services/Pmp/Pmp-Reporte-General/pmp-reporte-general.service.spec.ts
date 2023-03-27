import { TestBed } from '@angular/core/testing';

import { PmpReporteGeneralService } from './pmp-reporte-general.service';

describe('PmpReporteGeneralService', () => {
  let service: PmpReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
