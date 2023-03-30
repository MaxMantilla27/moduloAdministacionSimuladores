import { TestBed } from '@angular/core/testing';

import { CcnaPreguntaRespuestaService } from './ccna-pregunta-respuesta.service';

describe('ccnaPreguntaRespuestaService', () => {
  let service: CcnaPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});