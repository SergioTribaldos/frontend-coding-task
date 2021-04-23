import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {DynamicFormConfig} from '../core/models/dynamic-form.model';
import {FirebaseService} from '../core/services/firebase.service';
import {Employee} from '../core/models/employees.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  formConfig: DynamicFormConfig[];
  formGroup: FormGroup;

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {

    this.formConfig = [{
      type: 'input',
      displayName: 'Name',
      controlName: 'name',
      value: 'Sergio',
      editable: true,
      errorMessage: 'Name is required'
    },
      {
        type: 'input',
        displayName: 'Surname',
        controlName: 'surname',
        value: 'Tribaldos',
        editable: true,
        errorMessage: 'Surname is required'
      },
      {
        type: 'datepicker',
        displayName: 'Date of Birth',
        controlName: 'dateOfBirth',
        value: new Date('Tue Apr 16 2021 00:00:00 GMT+0200 (Central European Summer Time'),
        editable: true,
        errorMessage: 'Date of birth is required'
      },
      {
        type: 'select',
        displayName: 'Select position',
        controlName: 'workPosition',
        value: 'Angular',
        editable: true,
        errorMessage: 'Position is required',
        options: ['Angular', 'React', 'Php']
      }
    ];


  }

  setForm(formGroup: FormGroup): void {
    this.formGroup = formGroup;
  }

  addEmployee(): void {
    const employee: Employee = this.formGroup.getRawValue();
    this.firebaseService.addEmployee(employee).subscribe((val) => {
      console.log(val);
    });
  }


}
