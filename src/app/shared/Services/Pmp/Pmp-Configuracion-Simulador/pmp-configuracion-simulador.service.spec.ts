import { TestBed } from '@angular/core/testing';

import { PmpConfiguracionSimuladorService } from './pmp-configuracion-simulador.service';

describe('PmpConfiguracionSimuladorService', () => {
  let service: PmpConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
