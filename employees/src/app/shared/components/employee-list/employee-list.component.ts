import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../../../core/models/employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit {
  @Input() employees: Employee[];

  @Output() employeeSelected = new EventEmitter<Employee>();

  displayedColumns: string[] = ['name', 'surname', 'workPosition', 'dateOfBirth'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
