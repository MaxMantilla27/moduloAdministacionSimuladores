import { TestBed } from '@angular/core/testing';

import { DevopsPreguntaService } from './devops-pregunta.service';

describe('DevopsPreguntaService', () => {
  let service: DevopsPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
