import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditComponent} from './edit.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MaterialModule} from '../../core/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {FIRESTORE_STUB} from '../../shared/stubs/stubs';
import {FirebaseService} from '../../core/services/firebase.service';
import {NotificationService} from '../../core/services/notification.service';
import {HttpService} from '../../core/services/http.service';
import {FormTransformService} from '../../core/services/form-transform.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MaterialModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [
        {provide: AngularFirestore, useValue: FIRESTORE_STUB},
        {provide: FirebaseService, usevalue: {}},
        {provide: NotificationService, usevalue: {}},
        {provide: HttpService, usevalue: {}},
        {provide: FormTransformService, usevalue: {}}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
