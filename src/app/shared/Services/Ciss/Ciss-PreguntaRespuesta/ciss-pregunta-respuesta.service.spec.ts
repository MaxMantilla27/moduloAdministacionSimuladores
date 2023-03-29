import { TestBed } from '@angular/core/testing';

import { CissPreguntaRespuestaService } from './ciss-pregunta-respuesta.service';

describe('CissPreguntaRespuestaService', () => {
  let service: CissPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
