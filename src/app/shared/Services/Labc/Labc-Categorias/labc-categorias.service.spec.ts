import { TestBed } from '@angular/core/testing';

import { LabcCategoriasService } from './labc-categorias.service';

describe('LabcCategoriasService', () => {
  let service: LabcCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
