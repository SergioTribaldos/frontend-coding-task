import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Employee} from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class SearchStringService {
  private searchString: string;
  private searchStringSubject$ = new BehaviorSubject<string>('');

  searchStringChanged$ = this.searchStringSubject$.asObservable();

  constructor() {
  }

  setSearchString(searchString: string): void {
    this.searchString = searchString;
    this.searchStringSubject$.next(searchString);
  }

  filterByStringSearch(searchString: string, employees: Employee[]): Employee[] {
    return employees.filter((employee: Employee) =>
      employee.name.toLowerCase().includes(searchString.toLowerCase()) ||
      employee.surname.toLowerCase().includes(searchString.toLowerCase()));
  }
}
