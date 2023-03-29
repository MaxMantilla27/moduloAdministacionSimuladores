import { TestBed } from '@angular/core/testing';

import { PacpConfiguracionSimuladorService } from './pacp-configuracion-simulador.service';

describe('PacpConfiguracionSimuladorService', () => {
  let service: PacpConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
