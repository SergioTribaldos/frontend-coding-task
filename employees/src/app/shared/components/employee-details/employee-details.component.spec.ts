import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeeDetailsComponent} from './employee-details.component';
import {FormTransformService} from '../../../core/services/form-transform.service';
import {DEFAULT_FORM_CONFIG} from '../../../employees/constants/form-config.constants';
import {By} from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../core/material.module';

const FormGroupStub: FormGroup = new FormGroup({
  name: new FormControl('hgfhfg'),
});

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EmployeeDetailsComponent],
      providers: [{
        provide: FormTransformService,
        useValue: {}
      }, ReactiveFormsModule, MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form fields', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(EmployeeDetailsComponent);
      component = fixture.componentInstance;
      component.formConfig = DEFAULT_FORM_CONFIG;
      component.formGroup = FormGroupStub;
      fixture.detectChanges();
    });

    it('should show N labels if the form config has N entries', () => {
      const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.form-group__label'));

      expect(element.length).toBe(DEFAULT_FORM_CONFIG.length);
    });

    it('should display a select if the form config has a select type', () => {
      const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.form-group__select'));
      expect(!!element.length).toBeTruthy();
    });

    it('should display a datepicker if the form config has a datepicker type', () => {
      const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.form-group__datepicker'));
      expect(!!element.length).toBeTruthy();
    });

    it('should display a input if the form config has a input type', () => {
      const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.form-group__input'));
      expect(!!element.length).toBeTruthy();
    });
  });
});
