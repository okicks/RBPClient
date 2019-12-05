import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Liquor } from '../models/Liquor';

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
