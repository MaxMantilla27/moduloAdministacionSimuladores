import { TestBed } from '@angular/core/testing';

import { CapmCategoriasService } from './capm-categorias.service';

describe('CapmCategoriasService', () => {
  let service: CapmCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
