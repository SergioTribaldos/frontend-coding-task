import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormConfig } from '../core/models/dynamic-form.model';
import { FirebaseService } from '../core/services/firebase.service';
import { Employee } from '../core/models/employees.model';
import { NotificationService } from '../core/services/notification.service';
import { HttpService } from '../core/services/http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DEFAULT_FORM_CONFIG } from './constants/form-config.constants';

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
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.formConfig$ = this.httpService.get(POSITIONS_URL).pipe(
      map(result => result.positions),
      map(positions =>
        this.addPositionsToConfig(DEFAULT_FORM_CONFIG, positions)
      )
    );
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

  private addPositionsToConfig(
    formConfig: DynamicFormConfig[],
    positions: string[]
  ): DynamicFormConfig[] {
    return formConfig.map(dynamicFromConfig =>
      dynamicFromConfig.type === 'select'
        ? {
            ...dynamicFromConfig,
            options: positions
          }
        : dynamicFromConfig
    );
  }
}
