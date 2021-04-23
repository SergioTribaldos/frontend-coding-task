import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateEditComponent } from './employee-create-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../core/material.module';

const routes: Routes = [
  {
    path: '',
    component: EmployeeCreateEditComponent
  }
];

@NgModule({
  declarations: [
    EmployeeCreateEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeCreateEditModule { }
