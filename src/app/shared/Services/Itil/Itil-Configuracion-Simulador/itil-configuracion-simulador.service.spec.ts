import { TestBed } from '@angular/core/testing';

import { ItilConfiguracionSimuladorService } from './itil-configuracion-simulador.service';

describe('ItilConfiguracionSimuladorService', () => {
  let service: ItilConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
