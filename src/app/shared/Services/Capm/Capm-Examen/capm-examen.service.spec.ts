import { TestBed } from '@angular/core/testing';

import { CapmExamenService } from './capm-examen.service';

describe('CapmExamenService', () => {
  let service: CapmExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
