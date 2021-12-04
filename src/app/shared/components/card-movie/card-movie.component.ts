import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL } from 'src/app/controller/staticValues';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input() title: string = '';
  @Input() release_date: string = '';
  @Input() vote_average: number = 0;
  @Input() poster_path: string = '';
  @Input() overview: string = '';
  @Input() genres: [];

  constructor() { }

  ngOnInit() {

  }

  get imgFigure() {
    return `http://image.tmdb.org/t/p/w342` + `${this.poster_path}`
  }

}
