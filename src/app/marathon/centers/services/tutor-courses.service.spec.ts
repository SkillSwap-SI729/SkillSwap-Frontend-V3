import { TestBed } from '@angular/core/testing';

import { TutorCoursesService } from './tutor-courses.service';

describe('CenterParticipantsService', () => {
  let service: TutorCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
