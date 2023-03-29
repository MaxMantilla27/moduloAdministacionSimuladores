import { TestBed } from '@angular/core/testing';

import { CcnaTipoRespuestaService } from './ccna-tipo-respuesta.service';

describe('CcnaTipoRespuestaService', () => {
  let service: CcnaTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
