import { TestBed } from '@angular/core/testing';

import { ThewitcherService } from './thewitcher.service';

describe('ThewitcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThewitcherService = TestBed.get(ThewitcherService);
    expect(service).toBeTruthy();
  });
});
