import { TestBed } from '@angular/core/testing';

import { AdsaAdministrarUsuariosService } from './adsa-administrar-usuarios.service';

describe('AdsaAdministrarUsuariosService', () => {
  let service: AdsaAdministrarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaAdministrarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
