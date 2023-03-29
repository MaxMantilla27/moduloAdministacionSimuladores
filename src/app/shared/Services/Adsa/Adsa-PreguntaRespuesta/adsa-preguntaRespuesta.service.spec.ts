import { TestBed } from '@angular/core/testing';

import { AdsaPreguntaRespuestaService } from './adsa-preguntaRespuesta.service';

describe('AdsaPreguntaRespuestaService', () => {
  let service: AdsaPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});