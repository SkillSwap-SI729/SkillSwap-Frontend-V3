import { TestBed } from '@angular/core/testing';

import { CourseCommentsService } from './course-comments.service';

describe('CourseCommentsService', () => {
  let service: CourseCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
