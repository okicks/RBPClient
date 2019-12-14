import { Component, OnInit } from '@angular/core';
import { LiquorService } from 'src/app/services/liquor.service';
import { Liquor } from 'src/app/models/Liquor';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-all-liquors',
  templateUrl: './all-liquors.component.html',
  styleUrls: ['./all-liquors.component.css']
})
export class AllLiquorsComponent implements OnInit {

  columnNames = ['Name', 'Rating'];

  dataSource: MatTableDataSource<Liquor>;

  constructor(private liquorService: LiquorService) { }

  ngOnInit() {
    this.liquorService.getLiquors().subscribe((liquors: Liquor[])=>{
      this.dataSource = new MatTableDataSource<Liquor>(liquors);
    });
  }
}