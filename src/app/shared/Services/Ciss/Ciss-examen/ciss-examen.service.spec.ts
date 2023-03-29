import { TestBed } from '@angular/core/testing';

import { CissExamenService } from './ciss-examen.service';

describe('CissExamenService', () => {
  let service: CissExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
