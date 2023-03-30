import { TestBed } from '@angular/core/testing';

import { TogCategoriasService } from './tog-categorias.service';

describe('TogCategoriasService', () => {
  let service: TogCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
