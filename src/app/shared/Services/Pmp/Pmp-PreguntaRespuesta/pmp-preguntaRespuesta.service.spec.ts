import { TestBed } from '@angular/core/testing';

import { PmpPreguntaRespuestaService } from './pmp-preguntaRespuesta.service';

describe('PmpPreguntaRespuestaService', () => {
  let service: PmpPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});