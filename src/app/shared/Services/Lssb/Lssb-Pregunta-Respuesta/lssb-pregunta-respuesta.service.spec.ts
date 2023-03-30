import { TestBed } from '@angular/core/testing';

import { LssbPreguntaRespuestaService } from './lssb-pregunta-respuesta.service';

describe('LssbPreguntaRespuestaService', () => {
  let service: LssbPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
