import { TestBed } from '@angular/core/testing';

import { PacpTipoRespuestaService } from './pacp-tipo-respuesta.service';

describe('PacpTipoRespuestaService', () => {
  let service: PacpTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
