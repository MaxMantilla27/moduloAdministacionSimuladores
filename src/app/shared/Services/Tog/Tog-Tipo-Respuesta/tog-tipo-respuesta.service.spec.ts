import { TestBed } from '@angular/core/testing';

import { TogTipoRespuestaService } from './tog-tipo-respuesta.service';

describe('TogTipoRespuestaService', () => {
  let service: TogTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
