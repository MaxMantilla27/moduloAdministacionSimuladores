import { TestBed } from '@angular/core/testing';

import { PbiExamenService } from './pbi-examen.service';

describe('PbiExamenService', () => {
  let service: PbiExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
