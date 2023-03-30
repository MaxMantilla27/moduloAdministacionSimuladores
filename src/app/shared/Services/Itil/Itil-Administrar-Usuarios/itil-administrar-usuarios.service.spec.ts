import { TestBed } from '@angular/core/testing';

import { ItilAdministrarUsuariosService } from './itil-administrar-usuarios.service';

describe('ItilAdministrarUsuariosService', () => {
  let service: ItilAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
