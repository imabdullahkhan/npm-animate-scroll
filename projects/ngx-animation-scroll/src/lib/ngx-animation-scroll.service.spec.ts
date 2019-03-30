import { TestBed } from '@angular/core/testing';

import { NgxAnimationScrollService } from './ngx-animation-scroll.service';

describe('NgxAnimationScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAnimationScrollService = TestBed.get(NgxAnimationScrollService);
    expect(service).toBeTruthy();
  });
});
