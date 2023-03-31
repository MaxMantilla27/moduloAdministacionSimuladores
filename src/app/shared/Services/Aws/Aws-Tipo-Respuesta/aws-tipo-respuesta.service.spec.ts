import { TestBed } from '@angular/core/testing';

import { AwsTipoRespuestaService } from './aws-tipo-respuesta.service';

describe('AwsTipoRespuestaService', () => {
  let service: AwsTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
