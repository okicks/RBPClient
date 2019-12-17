import { Component, OnInit } from '@angular/core';
import { LiquorRating } from 'src/app/models/LiquorRating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liquor-rating',
  templateUrl: './liquor-rating.component.html',
  styleUrls: ['./liquor-rating.component.css']
})
export class LiquorRatingComponent implements OnInit {

  rating: number;
  star: number[] = [1, 2, 3, 4, 5];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  countStar(stars: number) {
    this.rating = stars;
    console.log('Value of star', stars);
  }

}
