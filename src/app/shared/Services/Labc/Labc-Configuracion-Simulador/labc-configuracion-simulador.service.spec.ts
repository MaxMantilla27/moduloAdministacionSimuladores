import { TestBed } from '@angular/core/testing';

import { LabcConfiguracionSimuladorService } from './labc-configuracion-simulador.service';

describe('LabcConfiguracionSimuladorService', () => {
  let service: LabcConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
