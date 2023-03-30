import { TestBed } from '@angular/core/testing';

import { ItilPreguntaService } from './itil-pregunta.service';

describe('ItilPreguntaService', () => {
  let service: ItilPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
