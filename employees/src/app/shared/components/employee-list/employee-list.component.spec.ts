import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeeListComponent} from './employee-list.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {EMPLOYEES_STUB} from '../../stubs/stubs';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Employee} from '../../../core/models/employees.model';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatSortModule, BrowserAnimationsModule],
      declarations: [EmployeeListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    component.employees = EMPLOYEES_STUB;
    component.dataSource = new MatTableDataSource<Employee>([]);
    component.sort = new MatSort();
    component.dataSource.sort = component.sort;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show two rows is there is two employees', () => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    component.dataSource = new MatTableDataSource<Employee>(EMPLOYEES_STUB);
    component.dataSource.sort = new MatSort();
    fixture.detectChanges();
    const rowHtmlElements: NodeList = fixture.debugElement.nativeElement.querySelectorAll('tbody tr');
    expect(rowHtmlElements.length).toBe(2);
  });

  it('Should show a "no results card" when there are no employees', () => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    component.dataSource = new MatTableDataSource<Employee>([]);
    component.dataSource.sort = component.sort;
    fixture.detectChanges();
    const noResultsCard: NodeList = fixture.debugElement.nativeElement.querySelectorAll('.no-results');
    expect(noResultsCard.length).toBe(1);

  });


});
