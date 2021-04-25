import {Employee} from '../../core/models/employees.model';
import {DynamicFormConfig} from '../../core/models/dynamic-form.model';
import firebase from 'firebase/app';


export const EMPLOYEES_STUB: Employee[] = [
  {
    id: 'hjf88hf3',
    name: 'sergio',
    surname: 'tribaldos',
    workPosition: 'React',
    dateOfBirth: new Date()
  },
  {
    id: 'hjf88hf3',
    name: 'John',
    surname: 'Connor',
    workPosition: 'Angular',
    dateOfBirth: new Date()
  }
];

export const FIREBASE_EMPLOYEE_STUB = [
  {
    id: 'hjf88hf3',
    name: 'sergio',
    surname: 'tribaldos',
    workPosition: 'React',
    dateOfBirth: {seconds: 1235987555}
  }
];

export const DEFAULT_FORM_CONFIG_STUB: DynamicFormConfig[] = [
  {
    type: 'input',
    displayName: 'Name',
    controlName: 'name',
    value: '',
    editable: true,
    errorMessage: 'Name is required'
  }
];
