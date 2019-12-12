import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api = 'https://localhost:44310';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  /*
    public get*NAME*() {
      return this.http.get(`${Api}/*LOCATION*`);
    }
  */
  
  public getLiquor(Id: number) {
    //URL needs updating
    return this.http.get(`${Api}/*LOCATION*/${Id}`)
  }

  public getRecipe(Id: number){
    //URL needs updating
    return this.http.get(`${Api}/*LOCATION*/${Id}`)
  }
}
  /*
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  */
