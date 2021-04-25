import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {FirebaseService} from '../../core/services/firebase.service';
import {NotificationService} from '../../core/services/notification.service';
import {HttpService} from '../../core/services/http.service';
import {FormTransformService} from '../../core/services/form-transform.service';
import {DynamicFormConfig} from '../../core/models/dynamic-form.model';
import {POSITIONS_URL} from '../constants/form-config.constants';
import {Employee} from '../../core/models/employees.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formConfig$: Observable<DynamicFormConfig[]>;
  formGroup: FormGroup;
  selectedEmployee: Employee;

  constructor(
    private firebaseService: FirebaseService,
    private notificationService: NotificationService,
    private httpService: HttpService,
    private location: Location,
    private formTransformService: FormTransformService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const navigationState = this.location.getState() as any;
    const {employee} = navigationState || {};
    this.selectedEmployee = employee;

    this.formConfig$ = this.httpService.get(POSITIONS_URL).pipe(
      map(result => result.positions),
      map(positions =>
        this.formTransformService.getFormConfigWithAddedPositions(positions)
      ),
      map((dynamicFormConfig: DynamicFormConfig[]) =>
        this.formTransformService.mergeEmployeeWithDynamicFormConfig(employee, dynamicFormConfig)
      )
    )
    ;
  }

  setForm(formGroup: FormGroup): void {
    this.formGroup = formGroup;
  }

  updateEmployee(): void {
    const updatedEmployee = this.formGroup.getRawValue() as unknown as Employee;
    this.firebaseService.updateEmployee(this.selectedEmployee.id, updatedEmployee).subscribe(
      () => {
        this.notificationService.showSuccessMessage(
          'Employee updated successfully'
        );
      },
      () => {
        this.notificationService.showErrorMessage(
          'Employee could not be updated'
        );
      }
    );
  }

  removeEmployee(): void {
    this.firebaseService.removeEmployee(this.selectedEmployee).subscribe(
      () => {
        this.notificationService.showSuccessMessage(
          'Employee removed successfully'
        );
        this.router.navigate(['home']);
      },
      () => {
        this.notificationService.showErrorMessage(
          'Employee could not be removed'
        );
      }
    );
  }

}
