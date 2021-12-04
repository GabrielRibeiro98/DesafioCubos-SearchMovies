import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GenresService } from "../genres/genres.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  genres: [] = []

  constructor(private genreService: GenresService) {
    this.genreService.listGenresId.subscribe((value: []) => {
      this.genres = value
    })
  }


  searchGenre(filter: string) {
    let controller: boolean = false
    this.genres.map((value: any) => {
      if (value.name == filter) {
        this.genreService.idGenreSearch.next(String(value.id));
        controller = true
      }
    })
    controller ? true : this.genreService.idGenreSearch.next('')
  }
}
