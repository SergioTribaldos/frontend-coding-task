import { TestBed } from '@angular/core/testing';

import { FormTransformService } from './form-transform.service';

describe('FormTransformService', () => {
  let service: FormTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
