import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { Router, ActivatedRoute } from '@angular/router';
import { RECIPES } from 'src/app/testlist-recipes';
import { MatTableDataSource } from '@angular/material';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  columnNames = ['Name', 'Rating'];
  dataSource: MatTableDataSource<Recipe>;
  
  recipe: Recipe;
  recipes = RECIPES;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes: Recipe[])=>{
      this.dataSource = new MatTableDataSource<Recipe>(recipes);
    });
    var url = this.router.url;
    this.pullData(Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length)));
  }
               
  goToDetailPage(clickedRecipe: Recipe) {
    this.router.navigate(['recipe/detail', clickedRecipe.Id]);
  }

  private pullData(Id: number){
    this.recipe
    this.recipeService.getRecipe(Id).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}