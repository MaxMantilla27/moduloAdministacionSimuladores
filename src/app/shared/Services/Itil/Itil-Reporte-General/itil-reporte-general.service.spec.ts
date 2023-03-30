import { TestBed } from '@angular/core/testing';

import { ItilReporteGeneralService } from './itil-reporte-general.service';

describe('ItilReporteGeneralService', () => {
  let service: ItilReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
