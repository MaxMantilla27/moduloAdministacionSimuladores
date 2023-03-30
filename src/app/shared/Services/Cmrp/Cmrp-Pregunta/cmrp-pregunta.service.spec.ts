import { TestBed } from '@angular/core/testing';

import { CmrpPreguntaService } from './cmrp-pregunta.service';

describe('CmrpPreguntaService', () => {
  let service: CmrpPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
