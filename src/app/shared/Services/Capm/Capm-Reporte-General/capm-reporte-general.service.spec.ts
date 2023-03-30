import { TestBed } from '@angular/core/testing';

import { CapmReporteGeneralService } from './capm-reporte-general.service';

describe('CapmReporteGeneralService', () => {
  let service: CapmReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
