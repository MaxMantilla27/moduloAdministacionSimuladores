import { TestBed } from '@angular/core/testing';

import { DevopsTipoRespuestaService } from './devops-tipo-respuesta.service';

describe('DevopsTipoRespuestaService', () => {
  let service: DevopsTipoRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsTipoRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
