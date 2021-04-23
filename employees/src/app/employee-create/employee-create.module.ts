import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateComponent } from './employee-create.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../core/material.module';

const routes: Routes = [
  {
    path: '',
    component: EmployeeCreateComponent
  }
];

@NgModule({
  declarations: [
    EmployeeCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeCreateModule { }
