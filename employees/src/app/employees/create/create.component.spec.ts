import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateComponent} from './create.component';
import {FirebaseService} from '../../core/services/firebase.service';
import {NotificationService} from '../../core/services/notification.service';
import {HttpService} from '../../core/services/http.service';
import {FormTransformService} from '../../core/services/form-transform.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {MaterialModule} from '../../core/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FIRESTORE_STUB} from '../../shared/stubs/stubs';


describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MaterialModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
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
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
