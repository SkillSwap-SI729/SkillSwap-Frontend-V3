import { TestBed } from '@angular/core/testing';

import { CourseSectionsService } from './course-sections.service';

describe('CourseSectionsService', () => {
  let service: CourseSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
