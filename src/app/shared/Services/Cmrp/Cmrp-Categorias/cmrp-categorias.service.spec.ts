import { TestBed } from '@angular/core/testing';

import { CmrpCategoriasService } from './cmrp-categorias.service';

describe('CmrpCategoriasService', () => {
  let service: CmrpCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
