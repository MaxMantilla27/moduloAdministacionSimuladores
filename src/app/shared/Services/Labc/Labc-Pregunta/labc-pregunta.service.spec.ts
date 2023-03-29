import { TestBed } from '@angular/core/testing';

import { LabcPreguntaService } from './labc-pregunta.service';

describe('LabcPreguntaService', () => {
  let service: LabcPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
