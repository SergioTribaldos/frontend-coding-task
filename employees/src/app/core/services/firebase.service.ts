import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import firebase from 'firebase';

import {Employee} from '../models/employees.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly COLLECTION = 'employees';

  constructor(private db: AngularFirestore) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.db.collection(this.COLLECTION).get().pipe(
      map((data) => data.docs.map((doc) => {
        const employee = doc.data() as Employee;
        const employeeWithId = {...employee, id: doc.id};
        return this.parseDate(employeeWithId);
      }))
    );
  }

  addEmployee(employee: Employee): Observable<any> {
    return from(this.db.collection(this.COLLECTION).add(employee));
  }

  removeEmployee({id}: Employee): Observable<any> {
    return from(this.db.collection(this.COLLECTION).doc(id).delete());
  }

  updateEmployee(id: string, employee: Employee): Observable<any> {
    return from(this.db.collection(this.COLLECTION).doc(id).update(employee));
  }

  private parseDate(employee: Employee): Employee {
    const parsedDate = employee.dateOfBirth as unknown as firebase.firestore.Timestamp;
    return {...employee, dateOfBirth: new Date(parsedDate.seconds * 1000)};
  }
}
