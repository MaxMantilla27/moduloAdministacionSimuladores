import { TestBed } from '@angular/core/testing';

import { CcnaPreguntaService } from './ccna-pregunta.service';

describe('CcnaPreguntaService', () => {
  let service: CcnaPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
