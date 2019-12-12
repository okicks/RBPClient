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
import { AuthGuard } from './guards/auth.guard';
import { MainService } from './services/main.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { AuthService } from 'src/app/services/auth.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainComponent },
  {
    path: 'whiskey', canActivate: [AuthGuard], children: [
        { path: 'liquor/:Id', component: LiquorDetailsComponent },
        { path: 'recipe/:Id', component: RecipeDetailsComponent },
        { path: 'liquors', component: LiquorComponent },
        { path: 'recipes', component: RecipeComponent },
      ]
    },
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
