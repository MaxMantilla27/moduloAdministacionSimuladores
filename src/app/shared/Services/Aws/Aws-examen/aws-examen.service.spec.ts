import { TestBed } from '@angular/core/testing';

import { AwsExamenService } from './aws-examen.service';

describe('AwsExamenService', () => {
  let service: AwsExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
