import { TestBed } from '@angular/core/testing';

import { CcnaTareaService } from './ccna-tarea.service';

describe('CcnaTareaService', () => {
  let service: CcnaTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcnaTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
