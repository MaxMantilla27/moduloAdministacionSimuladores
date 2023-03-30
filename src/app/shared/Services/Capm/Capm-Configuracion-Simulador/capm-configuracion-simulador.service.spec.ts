import { TestBed } from '@angular/core/testing';

import { CapmConfiguracionSimuladorService } from './capm-configuracion-simulador.service';

describe('CapmConfiguracionSimuladorService', () => {
  let service: CapmConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
