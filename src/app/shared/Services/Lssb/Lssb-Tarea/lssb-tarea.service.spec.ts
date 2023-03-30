import { TestBed } from '@angular/core/testing';

import { LssbTareaService } from './lssb-tarea.service';

describe('LssbTareaService', () => {
  let service: LssbTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LssbTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
