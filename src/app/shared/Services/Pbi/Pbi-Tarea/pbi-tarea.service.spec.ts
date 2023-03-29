import { TestBed } from '@angular/core/testing';

import { PbiTareaService } from './pbi-tarea.service';

describe('PbiTareaService', () => {
  let service: PbiTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
