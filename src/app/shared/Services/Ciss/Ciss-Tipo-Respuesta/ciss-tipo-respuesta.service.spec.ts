import { TestBed } from '@angular/core/testing';

import { CissTipoRespuestaService } from './ciss-tipo-respuesta.service';

describe('CissTipoRespuestaService', () => {
  let service: CissTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
