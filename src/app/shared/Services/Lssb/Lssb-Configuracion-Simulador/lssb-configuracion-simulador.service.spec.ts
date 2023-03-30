import { TestBed } from '@angular/core/testing';

import { LssbConfiguracionSimuladorService } from './lssb-configuracion-simulador.service';

describe('LssbConfiguracionSimuladorService', () => {
  let service: LssbConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
