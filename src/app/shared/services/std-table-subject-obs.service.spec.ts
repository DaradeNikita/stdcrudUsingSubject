import { TestBed } from '@angular/core/testing';

import { StdTableSubjectObsService } from './std-table-subject-obs.service';

describe('StdTableSubjectObsService', () => {
  let service: StdTableSubjectObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdTableSubjectObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
