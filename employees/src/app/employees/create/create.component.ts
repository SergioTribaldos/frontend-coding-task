import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {FirebaseService} from '../../core/services/firebase.service';
import {NotificationService} from '../../core/services/notification.service';
import {HttpService} from '../../core/services/http.service';
import {FormTransformService} from '../../core/services/form-transform.service';
import {POSITIONS_URL} from '../constants/form-config.constants';
import {Employee} from '../../core/models/employees.model';
import {DynamicFormConfig} from '../../core/models/dynamic-form.model';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  formConfig$: Observable<DynamicFormConfig[]>;
  formGroup: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    private notificationService: NotificationService,
    private httpService: HttpService,
    private formTransformService: FormTransformService) {
  }

  ngOnInit(): void {
    this.formConfig$ = this.httpService.get(POSITIONS_URL).pipe(
      map(result => result.positions),
      map(positions =>
        this.formTransformService.getFormConfigWithAddedPositions(positions)
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

}
