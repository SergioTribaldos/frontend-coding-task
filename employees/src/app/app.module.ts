import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';

const firebaseConfig = {
  apiKey: 'AIzaSyDVkjGminmoFvcLCqewuhYY5UTEc8xMfMA',
  authDomain: 'employees-e5116.firebaseapp.com',
  projectId: 'employees-e5116',
  storageBucket: 'employees-e5116.appspot.com',
  messagingSenderId: '355517046393',
  appId: '1:355517046393:web:e9d254c88555a5c31dfea8',
  measurementId: 'G-RBZZ6BPRWC'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
