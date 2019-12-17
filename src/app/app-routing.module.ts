import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LiquorDetailsComponent } from './components/liquor/liquor-details/liquor-details.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { MainComponent } from './components/main/main.component';
import { LiquorComponent } from './components/liquor/liquor.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AgeVerifyComponent } from './components/age-verify/age-verify.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LiquorRatingComponent } from './components/liquor-rating/liquor-rating.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'liquor/:Id', component: LiquorDetailsComponent },
  { path: 'recipe/:Id', component: RecipeDetailsComponent },
  { path: 'home', component: MainComponent },
  { path: 'liquors', component: LiquorComponent },
  { path: 'recipes', component: RecipeComponent },
  {path: 'rating', component: LiquorRatingComponent},
  { path: '**', component: AgeVerifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
