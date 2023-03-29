import { TestBed } from '@angular/core/testing';

import { CcnaPreguntaRespuestaService } from './ccna-preguntaRespuesta.service';

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