import { TestBed } from '@angular/core/testing';

import { PmpCategoriasService } from './pmp-categorias.service';

describe('PmpCategoriasService', () => {
  let service: PmpCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
