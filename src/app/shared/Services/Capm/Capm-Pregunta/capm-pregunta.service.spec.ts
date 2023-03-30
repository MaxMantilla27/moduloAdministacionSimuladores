import { TestBed } from '@angular/core/testing';

import { CapmPreguntaService } from './capm-pregunta.service';

describe('CapmPreguntaService', () => {
  let service: CapmPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
