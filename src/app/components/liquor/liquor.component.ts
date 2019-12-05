import { Component, OnInit } from '@angular/core';
import { Liquor } from 'src/app/models/Liquor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liquor',
  templateUrl: './liquor.component.html',
  styleUrls: ['./liquor.component.css']
})
export class LiquorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedLiquor: Liquor) {
    this.router.navigate(['liquor', clickedLiquor.Id]);
  }
}
