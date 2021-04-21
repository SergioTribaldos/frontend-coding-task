import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {SearchStringService} from '../services/search-string.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchControl = new FormControl('');

  constructor(private searchStringService: SearchStringService) {
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(debounceTime(400)).subscribe((searchString: string) => {
      this.searchStringService.setSearchString(searchString);
    });
  }

}
