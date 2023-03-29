import { TestBed } from '@angular/core/testing';

import { CissReporteGeneralService } from './ciss-reporte-general.service';

describe('CissReporteGeneralService', () => {
  let service: CissReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
