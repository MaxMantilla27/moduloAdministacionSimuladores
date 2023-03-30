import { TestBed } from '@angular/core/testing';

import { TogReporteGeneralService } from './tog-reporte-general.service';

describe('TogReporteGeneralService', () => {
  let service: TogReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
