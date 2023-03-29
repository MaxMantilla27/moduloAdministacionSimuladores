import { TestBed } from '@angular/core/testing';

import { LabcTipoRespuestaService } from './labc-tipo-respuesta.service';

describe('LabcTipoRespuestaService', () => {
  let service: LabcTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
