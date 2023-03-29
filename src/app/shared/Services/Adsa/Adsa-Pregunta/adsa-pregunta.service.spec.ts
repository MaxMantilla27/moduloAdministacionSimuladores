import { TestBed } from '@angular/core/testing';

import { AdsaPreguntaService } from './adsa-pregunta.service';

describe('AdsaPreguntaService', () => {
  let service: AdsaPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
