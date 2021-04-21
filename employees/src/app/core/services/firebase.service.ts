import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Employee} from '../models/employees.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly COLLECTION = 'employees';

  constructor(private db: AngularFirestore) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.db.collection(this.COLLECTION).get().pipe(
      map((data) => data.docs.map((doc) => doc.data() as Employee))
    );
  }

  addEmployee(employee: Employee) {
  }

  removeEmployee(employee: Employee) {

  }

  updateEmployee(employee: Employee) {

  }
}
