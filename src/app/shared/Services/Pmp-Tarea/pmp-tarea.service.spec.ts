import { TestBed } from '@angular/core/testing';

import { PmpTareaService } from './pmp-tarea.service';

describe('PmpTareaService', () => {
  let service: PmpTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmpTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
