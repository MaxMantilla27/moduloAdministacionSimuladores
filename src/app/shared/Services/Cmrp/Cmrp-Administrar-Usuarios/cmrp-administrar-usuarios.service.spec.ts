import { TestBed } from '@angular/core/testing';

import { CmrpAdministrarUsuariosService } from './cmrp-administrar-usuarios.service';

describe('CmrpAdministrarUsuariosService', () => {
  let service: CmrpAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
