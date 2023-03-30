import { TestBed } from '@angular/core/testing';

import { CapmTipoRespuestaService } from './capm-tipo-respuesta.service';

describe('CapmTipoRespuestaService', () => {
  let service: CapmTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
