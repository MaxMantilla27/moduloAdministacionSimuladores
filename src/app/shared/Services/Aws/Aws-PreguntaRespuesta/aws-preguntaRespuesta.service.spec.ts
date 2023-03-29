import { TestBed } from '@angular/core/testing';

import { AwsPreguntaRespuestaService } from './aws-preguntaRespuesta.service';

describe('awsPreguntaRespuestaService', () => {
  let service: AwsPreguntaRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsPreguntaRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});