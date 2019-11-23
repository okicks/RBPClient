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

const routes = [
  {path: '**', component: AgeVerifyComponent},
  {path: 'home', component: MainComponent},
  {path: 'liquors', component: LiquorComponent},
  {path: 'recipes', component: RecipeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgeVerifyComponent,
    MainComponent,
    LiquorComponent,
    RecipeComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule
  ],

  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
