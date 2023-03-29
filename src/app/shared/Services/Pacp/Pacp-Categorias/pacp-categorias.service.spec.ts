import { TestBed } from '@angular/core/testing';

import { PacpCategoriasService } from './pacp-categorias.service';

describe('PacpCategoriasService', () => {
  let service: PacpCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
