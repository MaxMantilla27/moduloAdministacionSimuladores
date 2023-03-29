import { TestBed } from '@angular/core/testing';

import { LabcExamenService } from './labc-examen.service';

describe('LabcExamenService', () => {
  let service: LabcExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
