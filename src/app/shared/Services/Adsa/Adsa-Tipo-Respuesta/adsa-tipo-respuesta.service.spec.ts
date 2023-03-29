import { TestBed } from '@angular/core/testing';

import { AdsaTipoRespuestaService } from './adsa-tipo-respuesta.service';

describe('AdsaTipoRespuestaService', () => {
  let service: AdsaTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
