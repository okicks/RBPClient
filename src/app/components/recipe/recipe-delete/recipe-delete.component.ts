import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-delete',
  templateUrl: './recipe-delete.component.html',
  styleUrls: ['./recipe-delete.component.css']
})
export class RecipeDeleteComponent implements OnInit {

  recipe: Recipe;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.recipeService.getRecipe(params.get('id')).subscribe((recipe: Recipe) => {
        this.recipe = recipe;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipe.Id).subscribe(() => {
      this.router.navigate(['/recipes']);
    })
  }

}
