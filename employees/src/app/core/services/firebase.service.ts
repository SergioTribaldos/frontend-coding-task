import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Employee} from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {
  }

  addEmployee(employee: Employee) {
  }

  removeEmployee(employee:Employee){

  }

  updateEmployee(employee:Employee){

  }
}
