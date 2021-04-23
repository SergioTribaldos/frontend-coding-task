import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {DynamicFormConfig} from '../models/dynamic-form.model';

@Injectable({
  providedIn: 'root'
})
export class FormTransformService {

  constructor(private formBuilder: FormBuilder) {
  }

  createFormGroup(formConfig: DynamicFormConfig[]): FormGroup {
    const form = formConfig.reduce((acc: DynamicFormConfig, curr: DynamicFormConfig) => {
      const current = {
        [curr.controlName]: new FormControl({
          value: curr.value,
          disabled: !curr.editable
        }, {validators: [Validators.required]})
      };
      return {...acc, ...current};
    }, {} as DynamicFormConfig);

    return this.formBuilder.group(form);
  }
}
