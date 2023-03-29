import { TestBed } from '@angular/core/testing';

import { AdsaTareaService } from './adsa-tarea.service';

describe('AdsaTareaService', () => {
  let service: AdsaTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsaTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
