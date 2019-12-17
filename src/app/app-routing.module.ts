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
import { RecipeCreateComponent } from './components/recipe/recipe-create/recipe-create.component';
//import { RecipeEditComponent } from './components/recipe/recipe-edit/recipe-edit.component';
//import { RecipeDeleteComponent } from './components/recipe/recipe-delete/recipe-delete.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'whiskey', canActivate: [AuthGuard], children: [
        { path: 'home', component: MainComponent },
        { path: 'liquors', component: LiquorComponent },
        { path: 'liquor/:id', component: LiquorDetailsComponent },
        { path: 'recipes', component: RecipeComponent },
        { path: 'recipe/:id', component: RecipeDetailsComponent },
        { path: 'recipe/create', component: RecipeCreateComponent},
        //{ path: 'recipe/edit/:id', component: RecipeEditComponent},
        //{ path: 'recipe/delete/:id', component: RecipeDeleteComponent}
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
