export type ControlType = 'input' | 'datepicker' | 'select';

export interface DynamicFormConfig {
  type: ControlType;
  controlName: string;
  displayName: string;
  value: string | Date;
  editable: boolean;
  errorMessage: string;
  options?: string[];
}
