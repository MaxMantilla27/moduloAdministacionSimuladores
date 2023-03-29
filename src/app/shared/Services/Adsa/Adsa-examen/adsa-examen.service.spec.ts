import { TestBed } from '@angular/core/testing';

import { AdsaExamenService } from './adsa-examen.service';

describe('AdsaExamenService', () => {
  let service: AdsaExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
