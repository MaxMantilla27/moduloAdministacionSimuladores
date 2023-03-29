import { TestBed } from '@angular/core/testing';

import { LabcPreguntaRespuestaService } from './labc-pregunta-respuesta.service';

describe('LabcPreguntaRespuestaService', () => {
  let service: LabcPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
