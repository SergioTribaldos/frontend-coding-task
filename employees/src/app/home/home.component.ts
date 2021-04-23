import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Employee} from '../core/models/employees.model';
import {FirebaseService} from '../core/services/firebase.service';
import {SearchStringService} from '../core/services/search-string.service';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
    private searchStringService: SearchStringService
  ) {
  }

  ngOnInit(): void {
    const employees$ = this.firebaseService.getEmployees().pipe(shareReplay());
    this.employees$ = combineLatest([employees$, this.searchStringService.searchStringChanged$]).pipe(
      map(([employees, searchString]) => this.searchStringService.filterByStringSearch(searchString, employees))
    );

  }

  navigateToEmployeeDetails(employee: Employee): void {
    this.router.navigate(['create-edit'], {state: {employee, isEditMode: true}});
  }
}
