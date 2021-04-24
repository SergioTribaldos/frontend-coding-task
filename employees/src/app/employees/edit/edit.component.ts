import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormGroup} from '@angular/forms';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {FirebaseService} from '../../core/services/firebase.service';
import {NotificationService} from '../../core/services/notification.service';
import {HttpService} from '../../core/services/http.service';
import {FormTransformService} from '../../core/services/form-transform.service';
import {DynamicFormConfig} from '../../core/models/dynamic-form.model';
import {POSITIONS_URL} from '../constants/form-config.constants';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
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
    const {employee} = navigationState;

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

  updateEmployee(){

  }

  removeEmployee(){

  }

}
