import { TestBed } from '@angular/core/testing';

import { PacpAdministrarUsuariosService } from './pacp-administrar-usuarios.service';

describe('PacpAdministrarUsuariosService', () => {
  let service: PacpAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
