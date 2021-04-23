export type ControlType = 'input' | 'datepicker' | 'select';
export type ControlName= 'name'|'surname'|'dateOfBirth'| 'workPosition';

export interface DynamicFormConfig {
  type: ControlType;
  controlName: ControlName;
  displayName: string;
  value: string | Date;
  editable: boolean;
  errorMessage: string;
  options?: string[];
}
