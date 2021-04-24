import {ControlName, DynamicFormConfig} from '../../core/models/dynamic-form.model';

export const DEFAULT_FORM_CONFIG: DynamicFormConfig[] = [
  {
    type: 'input',
    displayName: 'Name',
    controlName: 'name',
    value: '',
    editable: true,
    errorMessage: 'Name is required'
  },
  {
    type: 'input',
    displayName: 'Surname',
    controlName: 'surname',
    value: '',
    editable: true,
    errorMessage: 'Surname is required'
  },
  {
    type: 'datepicker',
    displayName: 'Date of Birth',
    controlName: 'dateOfBirth',
    value: '',
    editable: true,
    errorMessage: 'Date of birth is required'
  },
  {
    type: 'select',
    displayName: 'Select position',
    controlName: 'workPosition',
    value: '',
    editable: true,
    errorMessage: 'Position is required',
    options: []
  }
];

export const DEFAULT_EDITABLE_FIELDS: ControlName[] = ['name', 'workPosition'];
