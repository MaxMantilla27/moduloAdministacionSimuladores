import { TestBed } from '@angular/core/testing';

import { CissAdministrarUsuariosService } from './ciss-administrar-usuarios.service';

describe('CissAdministrarUsuariosService', () => {
  let service: CissAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
