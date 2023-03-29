import { TestBed } from '@angular/core/testing';

import { CcnaExamenService } from './ccna-examen.service';

describe('CcnaExamenService', () => {
  let service: CcnaExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
