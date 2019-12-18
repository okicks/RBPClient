import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from 'src/app/models/Recipe'

const Api = 'https://localhost:44310';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  /*
    get*NAME*() {
      return this.http.get(`${Api}/*LOCATION*`);
    }
  */

  getRecipes() {
    return this.http.get(`${Api}/recipe/allRecipes`);
  }

  getRecipe(id: number) {
    return this.http.get(`${Api}/recipe/${id}`, { headers: this.getHeaders() });
  }

  createRecipe(recipe : Recipe) {
    return this.http.post(`${Api}/api/Recipe/Create`, recipe, { headers: this.getHeaders() });
  }

  editRecipe(recipe : Recipe) {
    return this.http.put(`${Api}api/recipe/edit`, recipe, { headers: this.getHeaders() })
  }

  deleteRecipe(id: number) {
    return this.http.delete(`${Api}api/recipe/delete/${id}`, { headers: this.getHeaders() })
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}