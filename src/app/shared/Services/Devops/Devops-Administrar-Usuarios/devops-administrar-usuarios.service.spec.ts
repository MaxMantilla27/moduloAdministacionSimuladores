import { TestBed } from '@angular/core/testing';

import { DevopsAdministrarUsuariosService } from './devops-administrar-usuarios.service';

describe('DevopsAdministrarUsuariosService', () => {
  let service: DevopsAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
