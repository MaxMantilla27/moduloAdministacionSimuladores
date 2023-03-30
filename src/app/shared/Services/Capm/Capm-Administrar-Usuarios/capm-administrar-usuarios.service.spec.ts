import { TestBed } from '@angular/core/testing';

import { CapmAdministrarUsuariosService } from './capm-administrar-usuarios.service';

describe('CapmAdministrarUsuariosService', () => {
  let service: CapmAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
