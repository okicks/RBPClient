import { Component, OnInit } from '@angular/core';
import { LiquorService } from 'src/app/services/liquor.service';
import { Liquor } from 'src/app/models/Liquor';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-liquor-details',
  templateUrl: './liquor-details.component.html',
  styleUrls: ['./liquor-details.component.css']
})
export class LiquorDetailsComponent implements OnInit {

  columnNames = ['Name', 'Category', 'Percent', 'Origin', 'Rating'];

  dataSource: MatTableDataSource<Liquor>;

  constructor(private liquorService: LiquorService) { }

  ngOnInit() {
    this.liquorService.getLiquors().subscribe((liquors: Liquor[])=>{
      this.dataSource = new MatTableDataSource<Liquor>(liquors);
    });
  }
}
