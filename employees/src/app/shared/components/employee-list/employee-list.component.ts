import {
  AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {Employee} from '../../../core/models/employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnChanges, AfterViewInit {
  @Input() employees: Employee[];

  @Output() employeeSelected = new EventEmitter<Employee>();

  @ViewChild(MatSort) sort: MatSort;

  dataSource: any;
  displayedColumns: string[] = ['name', 'surname', 'workPosition', 'dateOfBirth'];

  constructor() {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.sort = this.sort;
  }
}
