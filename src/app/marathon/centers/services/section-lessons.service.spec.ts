import { TestBed } from '@angular/core/testing';

import { SectionLessonsService } from './section-lessons.service';

describe('SectionLessonsService', () => {
  let service: SectionLessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionLessonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
