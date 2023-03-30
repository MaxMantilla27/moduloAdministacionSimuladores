import { TestBed } from '@angular/core/testing';

import { TogTareaService } from './tog-tarea.service';

describe('TogTareaService', () => {
  let service: TogTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
