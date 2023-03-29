import { TestBed } from '@angular/core/testing';

import { CissTareaService } from './ciss-tarea.service';

describe('CissTareaService', () => {
  let service: CissTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CissTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
