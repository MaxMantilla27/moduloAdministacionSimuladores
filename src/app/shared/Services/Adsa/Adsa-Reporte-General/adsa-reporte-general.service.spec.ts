import { TestBed } from '@angular/core/testing';

import { AdsaReporteGeneralService } from './adsa-reporte-general.service';

describe('AdsaReporteGeneralService', () => {
  let service: AdsaReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
