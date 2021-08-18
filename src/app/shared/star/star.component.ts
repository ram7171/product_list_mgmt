import { Component, EventEmitter,Input, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  cropWidth: number = 75;
  @Input() rating: number = 4;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnChanges() {
    this.cropWidth = this.rating * 75/5;
  }

  onStarClick(): void {
    console.log(`rating  ${this.rating} was clicked`);
    this.ratingClicked.emit(`rating  ${this.rating} was clicked`);
  }

}
