import { TestBed } from '@angular/core/testing';

import { CissConfiguracionSimuladorService } from './ciss-configuracion-simulador.service';

describe('CissConfiguracionSimuladorService', () => {
  let service: CissConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
