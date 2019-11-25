/* https://angular.io/guide/http */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AgeVerifyComponent } from './components/age-verify/age-verify.component';
import { MainComponent } from './components/main/main.component';
import { LiquorComponent } from './components/liquor/liquor.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { MainService } from './services/main.service';
import { AppRoutingModule } from './app-routing.module';
import { LiquorDetailsComponent } from './components/liquor/liquor-details/liquor-details.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgeVerifyComponent,
    MainComponent,
    LiquorComponent,
    RecipeComponent,
    LiquorDetailsComponent,
    RecipeDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  providers: [
    MainService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
