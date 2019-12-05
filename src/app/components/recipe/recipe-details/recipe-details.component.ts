import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private router: Router, private service: MainService) { }

  ngOnInit() {
    var url = this.router.url;
    this.pullData(Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length)));
  }

  private pullData(Id: number){
    this.recipe
    this.service.getLiquor(Id).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}
