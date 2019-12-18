import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.recipeService.getRecipe(params.get('id')).subscribe((recipe: Recipe) => {
        this.recipe = recipe;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      Id: new FormControl(this.recipe.Id),
      Name: new FormControl(this.recipe.Name),
      Description: new FormControl(this.recipe.Description),
      Rating: new FormControl(this.recipe.AverageRating)
    });
  }

  onSubmit() {
    const updatedRecipe: Recipe = {
      Id: this.editForm.value.Id,
      Name: this.editForm.value.Name,
      Description: this.editForm.value.Description,
      AverageRating: this.editForm.value.AverageRating
    };
    this.recipeService.editRecipe(updatedRecipe).subscribe(() => {
      this.router.navigate(['/recipe']);
    });
  }

}
