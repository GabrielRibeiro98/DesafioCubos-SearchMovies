import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote-average',
  templateUrl: './vote-average.component.html',
  styleUrls: ['./vote-average.component.css']
})
export class VoteAverageComponent {

  @Input() voteAverage: number = 0;

  constructor() { }

}
