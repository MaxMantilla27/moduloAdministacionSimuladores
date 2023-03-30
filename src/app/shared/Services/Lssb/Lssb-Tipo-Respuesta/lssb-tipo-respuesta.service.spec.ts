import { TestBed } from '@angular/core/testing';

import { LssbTipoRespuestaService } from './lssb-tipo-respuesta.service';

describe('LssbTipoRespuestaService', () => {
  let service: LssbTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
