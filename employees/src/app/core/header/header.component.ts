import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';
import {SearchStringService} from '../services/search-string.service';
import {NavigationStart, Router, RouterEvent} from '@angular/router';

type UrlKeys = '/employee/edit' | '/employee/create' | '/home';
const NAVIGATION_DICTIONARY: Record<UrlKeys, string> = {
  '/employee/edit': 'Edit employee',
  '/employee/create': 'Create employee',
  '/home': 'Employees list',
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchControl = new FormControl('');
  showSearchBar: boolean;
  title: string;

  constructor(private searchStringService: SearchStringService, private router: Router) {
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(debounceTime(400)).subscribe((searchString: string) => {
      this.searchStringService.setSearchString(searchString);
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart))
      .subscribe((routerEvent) => {
        const navigation = routerEvent as NavigationStart;
        const url = navigation.url as UrlKeys;
        this.showSearchBar = url.includes('employee');
        this.title = NAVIGATION_DICTIONARY[url];

      });
  }

}
