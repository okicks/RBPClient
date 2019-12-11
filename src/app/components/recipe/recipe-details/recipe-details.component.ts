import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {

  dataSource: MatTableDataSource<Recipe>;
  recipe: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe (data => this.recipe = data['results']);
    this.dataSource = new MatTableDataSource<Recipe>(this.recipe);
  }

}
