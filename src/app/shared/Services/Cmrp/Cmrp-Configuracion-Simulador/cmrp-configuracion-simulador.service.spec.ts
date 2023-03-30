import { TestBed } from '@angular/core/testing';

import { CmrpConfiguracionSimuladorService } from './cmrp-configuracion-simulador.service';

describe('CmrpConfiguracionSimuladorService', () => {
  let service: CmrpConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
