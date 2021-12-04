import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GenresService implements OnInit {

  public listGenresId = new BehaviorSubject([]);
  public idGenreSearch = new BehaviorSubject('');

  constructor() { }

  ngOnInit() {

  }
}
