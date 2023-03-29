import { TestBed } from '@angular/core/testing';

import { CissCategoriasService } from './ciss-categorias.service';

describe('CissCategoriasService', () => {
  let service: CissCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
