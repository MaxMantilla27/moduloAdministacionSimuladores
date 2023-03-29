import { TestBed } from '@angular/core/testing';

import { PacpReporteGeneralService } from './pacp-reporte-general.service';

describe('PacpReporteGeneralService', () => {
  let service: PacpReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
