import {fakeAsync, flush, TestBed} from '@angular/core/testing';

import {FirebaseService} from './firebase.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FIRESTORE_STUB} from '../../shared/stubs/stubs';



describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: AngularFirestore, useValue: FIRESTORE_STUB}]
    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get a list of employees with the date parsed as a Date()', fakeAsync(() => {
    service.getEmployees().subscribe((employees) => {
      const month = isNaN(employees[0].dateOfBirth.getMonth());
      expect(month).toBeFalsy();
    });
    flush();
  }));
});
