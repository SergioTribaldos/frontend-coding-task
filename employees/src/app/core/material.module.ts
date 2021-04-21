import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule]
})
export class MaterialModule {
}
