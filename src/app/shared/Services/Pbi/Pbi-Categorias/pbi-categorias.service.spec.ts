import { TestBed } from '@angular/core/testing';

import { PbiCategoriasService } from './pbi-categorias.service';

describe('PbiCategoriasService', () => {
  let service: PbiCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
