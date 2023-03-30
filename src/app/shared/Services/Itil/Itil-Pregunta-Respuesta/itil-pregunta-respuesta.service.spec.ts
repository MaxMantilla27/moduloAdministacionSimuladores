import { TestBed } from '@angular/core/testing';

import { ItilPreguntaRespuestaService } from './itil-pregunta-respuesta.service';

describe('ItilPreguntaRespuestaService', () => {
  let service: ItilPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
