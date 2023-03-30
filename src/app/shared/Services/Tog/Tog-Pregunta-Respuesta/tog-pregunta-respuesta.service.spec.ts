import { TestBed } from '@angular/core/testing';

import { TogPreguntaRespuestaService } from './tog-pregunta-respuesta.service';

describe('TogPreguntaRespuestaService', () => {
  let service: TogPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
