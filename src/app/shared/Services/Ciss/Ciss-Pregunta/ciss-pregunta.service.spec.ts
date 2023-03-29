import { TestBed } from '@angular/core/testing';

import { CissPreguntaService } from './ciss-pregunta.service';

describe('CissPreguntaService', () => {
  let service: CissPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
