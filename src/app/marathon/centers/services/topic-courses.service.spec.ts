import { TestBed } from '@angular/core/testing';

import { TopicCoursesService } from './topic-courses.service';

describe('TopicCoursesService', () => {
  let service: TopicCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
