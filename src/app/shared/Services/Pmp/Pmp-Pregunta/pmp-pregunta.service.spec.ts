import { TestBed } from '@angular/core/testing';

import { PmpPreguntaService } from './pmp-pregunta.service';

describe('PmpPreguntaService', () => {
  let service: PmpPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
