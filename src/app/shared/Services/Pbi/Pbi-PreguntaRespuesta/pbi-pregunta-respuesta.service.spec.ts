import { TestBed } from '@angular/core/testing';

import { PbiPreguntaRespuestaService } from './pbi-pregunta-respuesta.service';

describe('PbiPreguntaRespuestaService', () => {
  let service: PbiPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});