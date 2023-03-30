import { TestBed } from '@angular/core/testing';

import { LssbExamenService } from './lssb-examen.service';

describe('LssbExamenService', () => {
  let service: LssbExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
