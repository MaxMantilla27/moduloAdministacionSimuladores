import { TestBed } from '@angular/core/testing';

import { LabcTareaService } from './labc-tarea.service';

describe('LabcTareaService', () => {
  let service: LabcTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
