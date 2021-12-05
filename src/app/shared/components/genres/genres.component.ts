import { GenresService } from './genres.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  @Input() listGenres = [];

  listGenresName = []

  constructor(private genresService: GenresService) {}

  ngOnInit() {
    this.genresService.listGenresId.subscribe(list => {
      if (list.length != 0) {
        list.map(value => {
          this.listGenres.map((id, index) => {
            if (id === value.id || id.id === value.id) {
              this.listGenresName[index] = { name: value.name }
            }
          })
        })
      }
    })
  }

  returnGenres(listGenresMovie: any[]): any {
    let data: any[] = []

  }

}
