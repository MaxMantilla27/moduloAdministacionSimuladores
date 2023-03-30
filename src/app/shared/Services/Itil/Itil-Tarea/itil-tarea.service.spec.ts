import { TestBed } from '@angular/core/testing';

import { ItilTareaService } from './itil-tarea.service';

describe('ItilTareaService', () => {
  let service: ItilTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItilTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
