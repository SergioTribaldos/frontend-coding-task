import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Employee} from '../core/models/employees.model';
import {filter, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {FirebaseService} from '../core/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees$: Observable<Employee[]>;
  dat: any;

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    this.employees$ = this.firebaseService.getEmployees();

  }

}
