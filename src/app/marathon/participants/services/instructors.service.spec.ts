import { TestBed } from '@angular/core/testing';

import { InstructorService } from './instructors.service';

describe('ParticipantsService', () => {
  let service: InstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
