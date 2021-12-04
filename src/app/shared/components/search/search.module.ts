import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GenresService } from '../genres/genres.service';
import { SearchService } from './search.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchComponent],
  providers: [GenresService, SearchService],
})
export class SearchModule { }
