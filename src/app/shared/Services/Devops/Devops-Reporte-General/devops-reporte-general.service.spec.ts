import { TestBed } from '@angular/core/testing';

import { DevopsReporteGeneralService } from './devops-reporte-general.service';

describe('DevopsReporteGeneralService', () => {
  let service: DevopsReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
