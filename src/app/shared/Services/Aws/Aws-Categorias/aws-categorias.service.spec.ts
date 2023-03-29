import { TestBed } from '@angular/core/testing';

import { AwsCategoriasService } from './aws-categorias.service';

describe('AwsCategoriasService', () => {
  let service: AwsCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
