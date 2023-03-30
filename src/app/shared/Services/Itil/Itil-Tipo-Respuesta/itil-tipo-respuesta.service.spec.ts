import { TestBed } from '@angular/core/testing';

import { ItilTipoRespuestaService } from './itil-tipo-respuesta.service';

describe('ItilTipoRespuestaService', () => {
  let service: ItilTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
