import { TestBed } from '@angular/core/testing';

import { CmrpTareaService } from './cmrp-tarea.service';

describe('CmrpTareaService', () => {
  let service: CmrpTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmrpTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
