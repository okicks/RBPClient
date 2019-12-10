import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.get(`${Api}/Recipe/AllRecipes`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}