import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, throwToolbarMixedModesError } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {

  columnNames = ['Name', 'Description'];
  dataSource: MatTableDataSource<Recipe>;

  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.recipeService.getRecipe(routeData.get('id')).subscribe((recipe: Recipe) => {
        this.recipe = recipe;
      });
    });
  }
  
}
