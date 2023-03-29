import { TestBed } from '@angular/core/testing';

import { PacpTareaService } from './pacp-tarea.service';

describe('PacpTareaService', () => {
  let service: PacpTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacpTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
