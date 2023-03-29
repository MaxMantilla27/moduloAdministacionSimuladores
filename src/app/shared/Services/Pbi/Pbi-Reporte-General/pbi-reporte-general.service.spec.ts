import { TestBed } from '@angular/core/testing';

import { PbiReporteGeneralService } from './pbi-reporte-general.service';

describe('PbiReporteGeneralService', () => {
  let service: PbiReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
