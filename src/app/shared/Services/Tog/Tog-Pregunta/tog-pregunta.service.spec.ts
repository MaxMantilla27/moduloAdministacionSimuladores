import { TestBed } from '@angular/core/testing';

import { TogPreguntaService } from './tog-pregunta.service';

describe('TogPreguntaService', () => {
  let service: TogPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
