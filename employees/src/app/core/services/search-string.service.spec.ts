import { TestBed } from '@angular/core/testing';

import { SearchStringService } from './search-string.service';

describe('SearchStringService', () => {
  let service: SearchStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
