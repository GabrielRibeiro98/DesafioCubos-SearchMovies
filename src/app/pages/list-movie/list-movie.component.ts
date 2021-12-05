import { SearchService } from 'src/app/shared/components/search/search.service';
import { LANGUAGE } from './../../controller/staticValues';
import { NetworkService } from './../../shared/services/network.service';
import { Component, OnInit } from '@angular/core';
import { BASE_URL, API_KEY } from '../../controller/staticValues';
import { GenresService } from 'src/app/shared/components/genres/genres.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
})
export class ListMovieComponent implements OnInit {

  movies: []
  moviesPaginate = new Array();
  idGenreSearch: string
  index = 0

  constructor(private networkService: NetworkService, private genresService: GenresService, private searchService: SearchService) {
    this.genresService.idGenreSearch.subscribe(id => {
      this.idGenreSearch = id;
    })
  }

  ngOnInit() {
    this.networkService.get(BASE_URL, `search/movie?api_key=${API_KEY}&${LANGUAGE}&query=''`).subscribe((list: any) => {
      this.movies = list.results;
      this.networkService.get(BASE_URL, `genre/movie/list?api_key=${API_KEY}&${LANGUAGE}`).subscribe((value: any) => {
        this.genresService.listGenresId.next(value.genres);
        this.paginate();
      })
    })
  }

  searchMovies(filter) {
    this.searchService.searchGenre(filter)
    if (this.idGenreSearch != '') {
        this.networkService.get(BASE_URL, `discover/movie?api_key=${API_KEY}&${LANGUAGE}&query=${this.idGenreSearch}&with_genres=28`).subscribe((value: any) => {
          this.movies = value.results;
          this.paginate();
          this.index = 0;
        })
      } else {
        this.networkService.get(BASE_URL, `search/movie?api_key=${API_KEY}&${LANGUAGE}&query=${filter}`).subscribe((value: any) => {
          this.movies = value.results;
          this.paginate();
          this.index = 0;
        })
    }
  }

  paginate() {
    let controllerPaginate = this.movies.length / 5
    let controllerIndexArray = 0
    let sliceIndex = 0
    for(var i = 0; i <= controllerPaginate; i++){
      this.moviesPaginate[controllerIndexArray] = this.movies.slice(sliceIndex, sliceIndex + 5);
      sliceIndex = sliceIndex + 5;
      controllerIndexArray++;
    };
  }

  indexArrayPaginate(index) {
    this.index = index
  }

}
