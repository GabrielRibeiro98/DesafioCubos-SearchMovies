import { PipesModule } from './../../pipes/pipes.module';
import { VoteAverageModule } from './../../shared/components/vote-average/vote-average.module';
import { GenresModule } from './../../shared/components/genres/genres.module';
import { PaginateModule } from './../../shared/components/paginate/paginate.module';
import { SearchModule } from './../../shared/components/search/search.module';
import { CardMovieModule } from './../../shared/components/card-movie/card-movie.module';
import { NetworkService } from './../../shared/services/network.service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenresService } from 'src/app/shared/components/genres/genres.service';
import { DetailsMovieComponent } from './details-movie.component';

@NgModule({
  declarations: [DetailsMovieComponent],
  imports: [
    CommonModule,
    GenresModule,
    VoteAverageModule,
    PipesModule
  ],
  exports: [DetailsMovieComponent],
  providers: [NetworkService, GenresService],
})
export class DetailsMovieModule { }
