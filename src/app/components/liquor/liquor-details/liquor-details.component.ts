import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Liquor } from 'src/app/models/Liquor';

@Component({
  selector: 'app-liquor-details',
  templateUrl: './liquor-details.component.html',
  styleUrls: ['./liquor-details.component.css']
})
export class LiquorDetailsComponent implements OnInit {

  liquor: Liquor;

  constructor(private router: Router, private service: MainService) { }

  ngOnInit() {
    var url = this.router.url;
    this.pullData(Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length)));
  }

  private pullData(Id: number){
    this.liquor
    this.service.getLiquor(Id).subscribe((liquor: Liquor) => {
      this.liquor = liquor;
    });
  }

}
