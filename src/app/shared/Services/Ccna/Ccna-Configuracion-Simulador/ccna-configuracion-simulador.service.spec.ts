import { TestBed } from '@angular/core/testing';

import { CcnaConfiguracionSimuladorService } from './ccna-configuracion-simulador.service';

describe('CcnaConfiguracionSimuladorService', () => {
  let service: CcnaConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
