import { TestBed } from '@angular/core/testing';

import { TogAdministrarUsuariosService } from './tog-administrar-usuarios.service';

describe('TogAdministrarUsuariosService', () => {
  let service: TogAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
