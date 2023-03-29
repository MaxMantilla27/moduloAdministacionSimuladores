import { TestBed } from '@angular/core/testing';

import { AwsTareaService } from './aws-tarea.service';

describe('AwsTareaService', () => {
  let service: AwsTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
