import { TestBed } from '@angular/core/testing';

import { CmrpPreguntaRespuestaService } from './cmrp-pregunta-respuesta.service';

describe('CmrpPreguntaRespuestaService', () => {
  let service: CmrpPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
