import { TestBed } from '@angular/core/testing';

import { LssbAdministrarUsuariosService } from './lssb-administrar-usuarios.service';

describe('LssbAdministrarUsuariosService', () => {
  let service: LssbAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
