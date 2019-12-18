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
import { AuthService } from './services/auth.service';
import { MainService } from './services/main.service';
import { RecipeService } from './services/recipe.service';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainComponent },
  { path: 'liquors', component: LiquorComponent },
  { path: 'recipes', component: RecipeComponent },
  {path: 'rating', component: LiquorRatingComponent},
  { path: '**', component: AgeVerifyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    HttpClientModule],

  providers: [
      AuthService,
      MainService,
      RecipeService,
      AuthGuard
    ],

  exports: [RouterModule]
})

export class AppRoutingModule { }
