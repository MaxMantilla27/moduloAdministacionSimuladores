import { TestBed } from '@angular/core/testing';

import { PbiAdministrarUsuariosService } from './pbi-administrar-usuarios.service';

describe('PbiAdministrarUsuariosService', () => {
  let service: PbiAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
