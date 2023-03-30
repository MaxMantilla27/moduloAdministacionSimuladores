import { TestBed } from '@angular/core/testing';

import { LssbCategoriasService } from './lssb-categorias.service';

describe('LssbCategoriasService', () => {
  let service: LssbCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
