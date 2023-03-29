import { TestBed } from '@angular/core/testing';

import { CcnaCategoriasService } from './ccna-categorias.service';

describe('CcnaCategoriasService', () => {
  let service: CcnaCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
