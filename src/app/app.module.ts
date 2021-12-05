import { PipesModule } from './pipes/pipes.module';
import { VoteAverageModule } from './shared/components/vote-average/vote-average.module';
import { DetailsMovieModule } from './pages/details-movie/details-movie.module';
import { SearchService } from 'src/app/shared/components/search/search.service';
import { SearchModule } from './shared/components/search/search.module';
import { TopBarModule } from './shared/components/topbar/topbar.module';
import { CardMovieModule } from './shared/components/card-movie/card-movie.module';
import { PaginateModule } from './shared/components/paginate/paginate.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMovieModule } from './pages/list-movie/list-movie.module';
import { HttpClientModule } from '@angular/common/http';
import { GenresModule } from './shared/components/genres/genres.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginateModule,
    CardMovieModule,
    ListMovieModule,
    TopBarModule,
    HttpClientModule,
    GenresModule,
    SearchModule,
    DetailsMovieModule,
    VoteAverageModule,
    PipesModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
