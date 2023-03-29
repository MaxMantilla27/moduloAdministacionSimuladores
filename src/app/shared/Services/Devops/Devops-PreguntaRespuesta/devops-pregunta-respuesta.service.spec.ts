import { TestBed } from '@angular/core/testing';

import { DevopsPreguntaRespuestaService } from './devops-pregunta-respuesta.service';

describe('DevopsPreguntaRespuestaService', () => {
  let service: DevopsPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
