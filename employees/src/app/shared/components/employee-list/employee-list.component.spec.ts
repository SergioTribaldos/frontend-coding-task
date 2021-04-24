import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeeListComponent} from './employee-list.component';
import {MatTableModule} from '@angular/material/table';
import {EMPLOYEES_STUB} from '../../stubs/stubs';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [EmployeeListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show two rows is there is two employees', () => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    component.employees = EMPLOYEES_STUB;
    fixture.detectChanges();
    const rowHtmlElements: NodeList = fixture.debugElement.nativeElement.querySelectorAll('tbody tr');
    expect(rowHtmlElements.length).toBe(2);
  });

  it('Should show a "no results card" when there are no employees', () => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    component.employees = [];
    fixture.detectChanges();
    const noResultsCard: NodeList = fixture.debugElement.nativeElement.querySelectorAll('.no-results');
    expect(noResultsCard.length).toBe(1);

  });


});
