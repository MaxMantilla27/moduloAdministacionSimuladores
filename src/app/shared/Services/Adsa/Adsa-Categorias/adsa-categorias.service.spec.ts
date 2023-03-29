import { TestBed } from '@angular/core/testing';

import { AdsaCategoriasService } from './adsa-categorias.service';

describe('AdsaCategoriasService', () => {
  let service: AdsaCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
