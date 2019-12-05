import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiquorDetailsComponent } from './components/liquor/liquor-details/liquor-details.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { MainComponent } from './components/main/main.component';
import { LiquorComponent } from './components/liquor/liquor.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AgeVerifyComponent } from './components/age-verify/age-verify.component';

const routes: Routes = [
  {path: 'liquor/:Id', component: LiquorDetailsComponent},
  {path: 'recipe/:Id', component: RecipeDetailsComponent},
  {path: 'home', component: MainComponent},
  {path: 'liquors', component: LiquorComponent},
  {path: 'recipes', component: RecipeComponent},
  {path: '**', component: AgeVerifyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
