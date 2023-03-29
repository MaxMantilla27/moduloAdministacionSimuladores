import { TestBed } from '@angular/core/testing';

import { DevopsConfiguracionSimuladorService } from './devops-configuracion-simulador.service';

describe('DevopsConfiguracionSimuladorService', () => {
  let service: DevopsConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
