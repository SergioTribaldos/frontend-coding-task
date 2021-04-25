import {TestBed} from '@angular/core/testing';

import {EditGuard} from './edit.guard';
import {RouterTestingModule} from '@angular/router/testing';

describe('EditGuard', () => {
  let guard: EditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(EditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
