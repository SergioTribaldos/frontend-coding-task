import {TestBed} from '@angular/core/testing';

import {SearchStringService} from './search-string.service';
import {EMPLOYEES_STUB} from '../../shared/stubs/stubs';
import {skip} from 'rxjs/operators';

describe('SearchStringService', () => {
  let service: SearchStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter employees matching a string in the field name', () => {
    const filteredEmployees = service.filterByStringSearch('ser', EMPLOYEES_STUB);

    expect(filteredEmployees.length).toBe(1);
  });

  it('should filter employees matching a string in the field surname', () => {
    const filteredEmployees = service.filterByStringSearch('Conn', EMPLOYEES_STUB);

    expect(filteredEmployees.length).toBe(1);
  });

  it('should return no employees if the string does not match either name or surname', () => {
    const filteredEmployees = service.filterByStringSearch('gfdg', EMPLOYEES_STUB);

    expect(filteredEmployees.length).toBe(0);
  });

  it('should emit when setSearchString method is called', () => {
    service.searchStringChanged$.pipe(skip(1)).subscribe((val) => {
      expect(val).toBe('Sergio');
    });

    service.setSearchString('Sergio');
  });
});
