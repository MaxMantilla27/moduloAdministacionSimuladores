import { TestBed } from '@angular/core/testing';

import { ItilExamenService } from './itil-examen.service';

describe('ItilExamenService', () => {
  let service: ItilExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
