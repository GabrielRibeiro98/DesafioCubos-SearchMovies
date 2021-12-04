import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {

  @Output() indexPaginate = new EventEmitter<number>();

  paginate = [
    { label: "1", value: 0 },
    { label: "2", value: 1 },
    { label: "3", value: 2 },
    { label: "4", value: 3 },
    { label: "5", value: 4 },
  ]

  newPaginate(index: number) {
    this.indexPaginate.emit(index);
  }

  constructor() { }

}
