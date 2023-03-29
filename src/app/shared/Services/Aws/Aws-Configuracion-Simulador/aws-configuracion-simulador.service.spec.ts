import { TestBed } from '@angular/core/testing';

import { AwsConfiguracionSimuladorService } from './aws-configuracion-simulador.service';

describe('AwsConfiguracionSimuladorService', () => {
  let service: AwsConfiguracionSimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsConfiguracionSimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
