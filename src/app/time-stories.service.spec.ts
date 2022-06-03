import { TestBed } from '@angular/core/testing';

import { TimeStoriesService } from './time-stories.service';

describe('TimeStoriesService', () => {
  let service: TimeStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
