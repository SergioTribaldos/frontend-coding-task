import {TestBed} from '@angular/core/testing';

const formBuilderStub = {
  group: () => true
};
import {FormTransformService} from './form-transform.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DEFAULT_FORM_CONFIG_STUB} from '../../shared/stubs/stubs';
import {DynamicFormConfig} from '../models/dynamic-form.model';

describe('FormTransformService', () => {
  let service: FormTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder]
    });
    service = TestBed.inject(FormTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Form creation', () => {

    it('should return a FormGroup instance', () => {
      const isFormGroup = service.createFormGroup(DEFAULT_FORM_CONFIG_STUB) instanceof FormGroup;
      expect(isFormGroup).toBeTruthy();
    });

    it('should create a form group based in a DynamicFormConfig array ', () => {
      const formGroup = service.createFormGroup(DEFAULT_FORM_CONFIG_STUB).getRawValue();
      const formGroupMock = new FormGroup({
        name: new FormControl({value: '', disabled: false}, {validators: [Validators.required]}),
      }).getRawValue();

      expect(formGroup).toEqual(formGroupMock);
    });
  });

  describe('Add positions', () => {

    it('should add the provided positions to a dynamicFormConfig if its of type select', () => {
      const formConfig: DynamicFormConfig[] = [{
        type: 'select',
        displayName: 'Select position',
        controlName: 'workPosition',
        value: '',
        editable: true,
        errorMessage: 'Position is required',
        options: []
      }];
      const positionsToAdd = ['one', 'two'];

      const [form] = service.getFormConfigWithAddedPositions(positionsToAdd, formConfig);

      expect(form.options).toEqual(positionsToAdd);
      expect(form.type).toEqual('select');
    });

  });


});
