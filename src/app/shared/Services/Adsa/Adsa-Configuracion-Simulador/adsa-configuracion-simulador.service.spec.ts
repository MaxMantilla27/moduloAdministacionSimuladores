import { TestBed } from '@angular/core/testing';

import { AdsaConfiguracionSimuladorService } from './adsa-configuracion-simulador.service';

describe('AdsaConfiguracionSimuladorService', () => {
  let service: AdsaConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
