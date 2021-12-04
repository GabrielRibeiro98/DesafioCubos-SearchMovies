import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() newEventSearch = new EventEmitter<string>();

  filter: string = ""

  constructor() { }

  filterSearch() {
    this.newEventSearch.emit(this.filter);
  }

}
