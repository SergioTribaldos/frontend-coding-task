import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {DynamicFormConfig} from '../core/models/dynamic-form.model';
import {FirebaseService} from '../core/services/firebase.service';
import {Employee} from '../core/models/employees.model';
import {NotificationService} from '../core/services/notification.service';
import {HttpService} from '../core/services/http.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {FormTransformService} from '../core/services/form-transform.service';

const POSITIONS_URL = 'https://ibillboard.com/api/positions';

@Component({
  selector: 'app-employee-create-edit',
  templateUrl: './employee-create-edit.component.html',
  styleUrls: ['./employee-create-edit.component.scss']
})
export class EmployeeCreateEditComponent implements OnInit {
  formConfig$: Observable<DynamicFormConfig[]>;
  formGroup: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    private notificationService: NotificationService,
    private httpService: HttpService,
    private location: Location,
    private formTransformService: FormTransformService
  ) {
  }

  ngOnInit(): void {
    const navigationState = this.location.getState() as any;
    const {isEditMode, employee} = navigationState;

    this.formConfig$ = this.httpService.get(POSITIONS_URL).pipe(
      map(result => result.positions),
      map(positions =>
        this.formTransformService.getFormConfigWithAddedPositions(positions)
      ),
      map((dynamicFormConfig: DynamicFormConfig[]) => {
          return isEditMode ? this.formTransformService.mergeEmployeeWithDynamicFormConfig(employee, dynamicFormConfig) : dynamicFormConfig;
        }
      )
    )
    ;
  }

  setForm(formGroup: FormGroup): void {
    this.formGroup = formGroup;
  }

  addEmployee(): void {
    const employee: Employee = this.formGroup.getRawValue();
    this.firebaseService.addEmployee(employee).subscribe(
      () => {
        this.notificationService.showSuccessMessage(
          'Employee added successfully'
        );
      },
      () => {
        this.notificationService.showErrorMessage(
          'Employee could not be added'
        );
      }
    );
  }

}
