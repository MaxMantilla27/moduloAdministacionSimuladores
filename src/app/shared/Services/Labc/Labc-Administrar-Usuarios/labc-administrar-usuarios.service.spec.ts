import { TestBed } from '@angular/core/testing';

import { LabcAdministrarUsuariosService } from './labc-administrar-usuarios.service';

describe('LabcAdministrarUsuariosService', () => {
  let service: LabcAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
