import { TestBed } from '@angular/core/testing';

import { PmpTipoRespuestaService } from './pmp-tipo-respuesta.service';

describe('PmpTipoRespuestaService', () => {
  let service: PmpTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
