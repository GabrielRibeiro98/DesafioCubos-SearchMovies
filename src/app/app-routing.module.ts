import { ListMovieComponent } from './pages/list-movie/list-movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMovieComponent } from './pages/details-movie/details-movie.component';

const routes: Routes = [
  { path: 'movies', component: ListMovieComponent },
  { path: 'details-movie/:id', component: DetailsMovieComponent },
  {path: '', pathMatch: 'full', redirectTo: 'movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
