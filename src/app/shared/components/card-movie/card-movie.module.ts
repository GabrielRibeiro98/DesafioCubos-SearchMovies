import { VoteAverageModule } from './../vote-average/vote-average.module';
import { CardMovieComponent } from './card-movie.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenresModule } from '../genres/genres.module';

@NgModule({
  declarations: [CardMovieComponent],
  imports: [
    CommonModule,
    GenresModule,
    VoteAverageModule
  ],
  exports: [CardMovieComponent],
  providers: [],
})
export class CardMovieModule { }
