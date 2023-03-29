import { TestBed } from '@angular/core/testing';

import { DevopsCategoriasService } from './devops-categorias.service';

describe('DevopsCategoriasService', () => {
  let service: DevopsCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
