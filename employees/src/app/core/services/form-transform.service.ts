import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ControlName, DynamicFormConfig} from '../models/dynamic-form.model';
import {Employee} from '../models/employees.model';
import {DEFAULT_EDITABLE_FIELDS, DEFAULT_FORM_CONFIG} from '../../employees/constants/form-config.constants';

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

  mergeEmployeeWithDynamicFormConfig(employee: Employee, dynamicFormConfig: DynamicFormConfig[]): DynamicFormConfig[] {
    return dynamicFormConfig.map((formConfig) => {
      const value = this.getValueField(employee, formConfig);
      const editable = this.getIsEditable(formConfig, DEFAULT_EDITABLE_FIELDS);
      return {...formConfig, value, editable};
    });
  }

  getFormConfigWithAddedPositions(
    positions: string[],
    formConfig: DynamicFormConfig[] = DEFAULT_FORM_CONFIG
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

  private getIsEditable(formConfig: DynamicFormConfig, editableFields: ControlName[]): boolean {
    return editableFields.some((field) => field === formConfig.controlName);
  }

  private getValueField(employee: Employee, formConfig: DynamicFormConfig): string {
    const matchingValue = Object.entries(employee).find(([key, _]) => key === formConfig.controlName);
    const [value] = (matchingValue as [string, any]).reverse();
    return value;
  }
}
