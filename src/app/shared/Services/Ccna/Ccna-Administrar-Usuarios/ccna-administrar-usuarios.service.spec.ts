import { TestBed } from '@angular/core/testing';

import { CcnaAdministrarUsuariosService } from './ccna-administrar-usuarios.service';

describe('CcnaAdministrarUsuariosService', () => {
  let service: CcnaAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
