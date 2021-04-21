import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Employee} from '../core/models/employees.model';
import {filter, map, switchMap, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor() {

  }

  ngOnInit(): void {
    this.employees$ = of([
      {name: 'Sergio', surname: 'Tridsdbaldos', workPosition: 'Angular', dateOfBirth: new Date()},
      {name: 'Pepe', surname: 'Tribaldos', workPosition: 'Angular', dateOfBirth: new Date()},
      {name: 'Antoio', surname: 'Tribaldos', workPosition: 'Angular', dateOfBirth: new Date()},
      {name: 'Jarl', surname: 'Tribaldos', workPosition: 'Angular', dateOfBirth: new Date()},
      {name: 'Peich', surname: 'Tribaldos', workPosition: 'Angular', dateOfBirth: new Date()},
      {name: 'NaN', surname: 'Tribaldos', workPosition: 'Angular', dateOfBirth: new Date()},
    ]);


  }

}
