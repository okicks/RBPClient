import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {

  columnNames = ['Id', 'Name', 'Description', 'Rating'];
  dataSource: MatTableDataSource<Recipe>;

  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes: Recipe[])=>{
      this.dataSource = new MatTableDataSource<Recipe>(recipes);
    });
    var url = this.router.url;
    this.pullData(Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length)));
  }

  private pullData(Id: number){
    this.recipe
    this.recipeService.getRecipe(Id).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}
