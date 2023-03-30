import { TestBed } from '@angular/core/testing';

import { CmrpTipoRespuestaService } from './cmrp-tipo-respuesta.service';

describe('CmrpTipoRespuestaService', () => {
  let service: CmrpTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
