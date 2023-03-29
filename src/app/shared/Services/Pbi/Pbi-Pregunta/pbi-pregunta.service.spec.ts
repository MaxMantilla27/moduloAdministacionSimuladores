import { TestBed } from '@angular/core/testing';

import { PbiPreguntaService } from './pbi-pregunta.service';

describe('PbiPreguntaService', () => {
  let service: PbiPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
