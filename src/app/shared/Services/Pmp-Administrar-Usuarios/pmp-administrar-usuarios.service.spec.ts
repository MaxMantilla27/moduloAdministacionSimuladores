import { TestBed } from '@angular/core/testing';

import { PmpAdministrarUsuariosService } from './pmp-administrar-usuarios.service';

describe('PmpAdministrarUsuariosService', () => {
  let service: PmpAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
