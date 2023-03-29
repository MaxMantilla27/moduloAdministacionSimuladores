import { TestBed } from '@angular/core/testing';

import { PbiTipoRespuestaService } from './pbi-tipo-respuesta.service';

describe('PbiTipoRespuestaService', () => {
  let service: PbiTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
