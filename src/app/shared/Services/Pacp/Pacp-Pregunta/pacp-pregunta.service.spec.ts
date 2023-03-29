import { TestBed } from '@angular/core/testing';

import { PacpPreguntaService } from './pacp-pregunta.service';

describe('PacpPreguntaService', () => {
  let service: PacpPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
