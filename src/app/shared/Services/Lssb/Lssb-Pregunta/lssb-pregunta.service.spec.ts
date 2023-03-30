import { TestBed } from '@angular/core/testing';

import { LssbPreguntaService } from './lssb-pregunta.service';

describe('LssbPreguntaService', () => {
  let service: LssbPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
