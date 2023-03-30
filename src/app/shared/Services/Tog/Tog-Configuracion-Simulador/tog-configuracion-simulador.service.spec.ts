import { TestBed } from '@angular/core/testing';

import { TogConfiguracionSimuladorService } from './tog-configuracion-simulador.service';

describe('TogConfiguracionSimuladorService', () => {
  let service: TogConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
