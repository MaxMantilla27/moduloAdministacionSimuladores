import { TestBed } from '@angular/core/testing';

import { DevopsExamenService } from './devops-examen.service';

describe('DevopsExamenService', () => {
  let service: DevopsExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
