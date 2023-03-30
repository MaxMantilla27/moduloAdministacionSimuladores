import { TestBed } from '@angular/core/testing';

import { CmrpExamenService } from './cmrp-examen.service';

describe('CmrpExamenService', () => {
  let service: CmrpExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
