import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../core/material.module';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    EmployeeListComponent
  ]
})
export class SharedModule {
}
