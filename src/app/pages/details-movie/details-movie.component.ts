import { SearchService } from 'src/app/shared/components/search/search.service';
import { LANGUAGE } from './../../controller/staticValues';
import { NetworkService } from './../../shared/services/network.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { BASE_URL, API_KEY } from '../../controller/staticValues';
import { GenresService } from 'src/app/shared/components/genres/genres.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css'],
})
export class DetailsMovieComponent implements OnInit {

  movie

  constructor(private sanitizer: DomSanitizer, private networkService: NetworkService, private genresService: GenresService, private router: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.networkService.get(BASE_URL, `movie/${params.id}?api_key=${API_KEY}&${LANGUAGE}&append_to_response=videos`).subscribe(value => {
        this.movie = value;
      })
    })
  }

  get imgFigure() {
    return `http://image.tmdb.org/t/p/w342` + `${this.movie.poster_path}`
  }

  get trailer() {
    return `http://www.youtube.com/embed/${this.movie.videos.results[0].key}?rel=0&controls=0&hd=1&showinfo=0&enablejsapi=1`
  }



}
