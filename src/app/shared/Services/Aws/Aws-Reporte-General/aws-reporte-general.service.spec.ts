import { TestBed } from '@angular/core/testing';

import { AwsReporteGeneralService } from './aws-reporte-general.service';

describe('awsReporteGeneralService', () => {
  let service: AwsReporteGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsReporteGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
