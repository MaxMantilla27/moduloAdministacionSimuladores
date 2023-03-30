import { TestBed } from '@angular/core/testing';

import { CapmTareaService } from './capm-tarea.service';

describe('CapmTareaService', () => {
  let service: CapmTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapmTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
