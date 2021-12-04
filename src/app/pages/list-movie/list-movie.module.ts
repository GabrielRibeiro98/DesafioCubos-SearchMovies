import { PaginateModule } from './../../shared/components/paginate/paginate.module';
import { SearchModule } from './../../shared/components/search/search.module';
import { CardMovieModule } from './../../shared/components/card-movie/card-movie.module';
import { NetworkService } from './../../shared/services/network.service';
import { ListMovieComponent } from './list-movie.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenresService } from 'src/app/shared/components/genres/genres.service';
import { SearchService } from 'src/app/shared/components/search/search.service';

@NgModule({
  declarations: [ListMovieComponent],
  imports: [
    CommonModule,
    CardMovieModule,
    SearchModule,
    PaginateModule
  ],
  exports: [ListMovieComponent],
  providers: [NetworkService, GenresService, SearchService],
})
export class ListMovieModule { }
