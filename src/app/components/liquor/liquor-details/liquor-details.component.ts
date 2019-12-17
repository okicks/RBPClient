import { Component, OnInit } from '@angular/core';
import { LiquorService } from 'src/app/services/liquor.service';
import { Liquor } from 'src/app/models/Liquor';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-liquor-details',
  templateUrl: './liquor-details.component.html',
  styleUrls: ['./liquor-details.component.css']
})
export class LiquorDetailsComponent implements OnInit {

  columnNames = ['Name', 'Category', 'Percent', 'Origin', 'Rating'];
  dataSource: MatTableDataSource<Liquor>;

  liquor: Liquor;

  constructor(private liquorService: LiquorService, private router: Router, private service: MainService) { }

  ngOnInit() {
    this.liquorService.getLiquors().subscribe((liquors: Liquor[])=>{
      this.dataSource = new MatTableDataSource<Liquor>(liquors);
    });
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
