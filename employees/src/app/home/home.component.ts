import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Employee} from '../core/models/employees.model';
import {FirebaseService} from '../core/services/firebase.service';
import {SearchStringService} from '../core/services/search-string.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(private firebaseService: FirebaseService, private searchStringService: SearchStringService) {

  }

  ngOnInit(): void {
    const employees$ = this.firebaseService.getEmployees();
    this.employees$ = combineLatest([employees$, this.searchStringService.searchStringChanged$]).pipe(
      map(([employees, searchString]) => this.searchStringService.filterByStringSearch(searchString, employees))
    );

  }

}
