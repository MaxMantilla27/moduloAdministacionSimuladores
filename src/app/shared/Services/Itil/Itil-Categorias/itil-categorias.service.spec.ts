import { TestBed } from '@angular/core/testing';

import { ItilCategoriasService } from './itil-categorias.service';

describe('ItilCategoriasService', () => {
  let service: ItilCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
