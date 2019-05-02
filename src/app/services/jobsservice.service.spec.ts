import { TestBed } from '@angular/core/testing';

import { JobsserviceService } from './jobsservice.service';

describe('JobsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobsserviceService = TestBed.get(JobsserviceService);
    expect(service).toBeTruthy();
  });
});
