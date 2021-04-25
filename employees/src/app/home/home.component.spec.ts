import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {FIRESTORE_STUB} from '../shared/stubs/stubs';
import {FirebaseService} from '../core/services/firebase.service';
import {SearchStringService} from '../core/services/search-string.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
      providers: [
        {provide: AngularFirestore, useValue: FIRESTORE_STUB},
        {provide: FirebaseService, usevalue: {}},
        {provide: SearchStringService, usevalue: {}},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
