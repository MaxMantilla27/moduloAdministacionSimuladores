import { TestBed } from '@angular/core/testing';

import { PmpExamenService } from './pmp-examen.service';

describe('PmpExamenService', () => {
  let service: PmpExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
