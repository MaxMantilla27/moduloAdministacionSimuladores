import { TestBed } from '@angular/core/testing';

import { PacpExamenService } from './pacp-examen.service';

describe('PacpExamenService', () => {
  let service: PacpExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
