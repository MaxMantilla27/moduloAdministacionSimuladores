import { TestBed } from '@angular/core/testing';

import { AwsAdministrarUsuariosService } from './aws-administrar-usuarios.service';

describe('AwsAdministrarUsuariosService', () => {
  let service: AwsAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
