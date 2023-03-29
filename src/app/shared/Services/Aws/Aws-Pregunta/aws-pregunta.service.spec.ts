import { TestBed } from '@angular/core/testing';

import { AwsPreguntaService } from './aws-pregunta.service';

describe('AwsPreguntaService', () => {
  let service: AwsPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
