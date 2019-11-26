import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Api = 'https://localhost:44310';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  /*
    get*NAME*() {
      return this.http.get(`${Api}/*LOCATION*`);
    }
    
  */
}
