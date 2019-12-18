import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private form: FormBuilder, private recipeService: RecipeService, private router: Router) { 
    this.createForm(); 
  }

  ngOnInit() {
  }

  createForm() {
    this.recipeForm = this.form.group({
      Name: new FormControl,
      Description: new FormControl,
      AverageRating: new FormControl
    });
  }

  onSubmit() {
    this.recipeService.createRecipe(this.recipeForm.value).subscribe(() => {
      this.router.navigate(['/recipe'])
    });
  }

}
