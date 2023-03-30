import { TestBed } from '@angular/core/testing';

import { CapmPreguntaRespuestaService } from './capm-pregunta-respuesta.service';

describe('CapmPreguntaRespuestaService', () => {
  let service: CapmPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
