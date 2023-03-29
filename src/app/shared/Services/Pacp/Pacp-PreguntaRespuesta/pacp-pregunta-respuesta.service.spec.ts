import { TestBed } from '@angular/core/testing';

import { PacpPreguntaRespuestaService } from './pacp-pregunta-respuesta.service';

describe('PacpPreguntaRespuestaService', () => {
  let service: PacpPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
