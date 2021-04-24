import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {MaterialModule} from '../core/material.module';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {EditGuard} from '../core/guards/edit.guard';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [EditGuard]
  }
];

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeesModule {
}
