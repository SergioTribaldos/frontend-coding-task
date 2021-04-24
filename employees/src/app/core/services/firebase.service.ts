import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Employee} from '../models/employees.model';
import {map} from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import firebase from 'firebase';

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

  removeEmployee(employee: Employee) {

  }

  updateEmployee(employee: Employee) {

  }

  private parseDate(employee: Employee): Employee {
    const parsedDate = employee.dateOfBirth as unknown as firebase.firestore.Timestamp;
    return {...employee, dateOfBirth: new Date(parsedDate.seconds * 1000)};
  }
}
