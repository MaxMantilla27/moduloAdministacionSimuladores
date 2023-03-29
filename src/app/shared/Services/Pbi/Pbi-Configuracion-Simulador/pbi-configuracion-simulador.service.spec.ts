import { TestBed } from '@angular/core/testing';

import { PbiConfiguracionSimuladorService } from './pbi-configuracion-simulador.service';

describe('PbiConfiguracionSimuladorService', () => {
  let service: PbiConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
