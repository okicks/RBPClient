import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const Api = 'https://localhost:44310';

@Injectable({
  providedIn: 'root'
})
export class LiquorService {

  constructor(private http: HttpClient) { }

  getLiquors(){
    return this.http.get(`${Api}/api/liquor`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
