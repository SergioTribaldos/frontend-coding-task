import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../core/material.module';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
    exports: [
        EmployeeListComponent,
        EmployeeDetailsComponent
    ]
})
export class SharedModule {
}
