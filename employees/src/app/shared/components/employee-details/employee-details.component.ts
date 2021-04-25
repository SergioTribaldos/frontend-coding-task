import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Subject} from 'rxjs';

import {FormTransformService} from '../../../core/services/form-transform.service';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {DynamicFormConfig} from '../../../core/models/dynamic-form.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() formConfig: DynamicFormConfig[];

  @Output() formChanged = new EventEmitter<FormGroup>();

  readonly maxDate: Date = new Date();
  destroy$: Subject<boolean> = new Subject<boolean>();
  formGroup: FormGroup;

  constructor(private formTransformService: FormTransformService) {
  }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.formConfig.currentValue) {
      this.formGroup = this.formTransformService.createFormGroup(this.formConfig);
      this.formChanged.emit(this.formGroup);
      this.formGroup.valueChanges.pipe(
        debounceTime(500),
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.formChanged.emit(this.formGroup);
      });
    }
  }
}
