import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { Router } from '@angular/router';
import { RECIPES } from 'src/app/testlist-recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes = RECIPES;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedRecipe: Recipe) {
    this.router.navigate(['recipe/detail', clickedRecipe.Id]);
  }
}
