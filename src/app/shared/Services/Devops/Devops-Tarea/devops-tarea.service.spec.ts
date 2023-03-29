import { TestBed } from '@angular/core/testing';

import { DevopsTareaService } from './devops-tarea.service';

describe('DevopsTareaService', () => {
  let service: DevopsTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
