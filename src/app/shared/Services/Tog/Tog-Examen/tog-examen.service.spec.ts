import { TestBed } from '@angular/core/testing';

import { TogExamenService } from './tog-examen.service';

describe('TogExamenService', () => {
  let service: TogExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
