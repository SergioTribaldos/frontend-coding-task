import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeCardComponent} from './components/employee-card/employee-card.component';


@NgModule({
  declarations: [
    EmployeeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeeCardComponent
  ]
})
export class SharedModule {
}
