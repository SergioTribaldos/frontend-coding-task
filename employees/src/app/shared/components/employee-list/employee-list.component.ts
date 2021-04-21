import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../core/models/employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'workPosition', 'dateOfBirth'];

  @Input() employees: Employee[];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.employees);
  }

}
