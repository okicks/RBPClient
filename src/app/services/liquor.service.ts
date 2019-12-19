import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Liquor } from '../models/Liquor';

const Api = 'https://localhost:44310';

@Injectable({
  providedIn: 'root'
})
export class LiquorService {

  constructor(private http: HttpClient) { }

  getLiquors(){
    return this.http.get(`${Api}/api/AllLiquors`, { headers: this.getHeaders() });
  }

  getLiquor(id: number) {
    return this.http.get(`${Api}/liquors/${id}`, { headers: this.getHeaders() });
  }

  createLiquor(liquor : Liquor) {
    return this.http.post(`${Api}/api/Liquors/Create`, liquor, { headers: this.getHeaders() });
  }

  editLiquor(liquor : Liquor) {
    return this.http.put(`${Api}/Liquors/Edit`, liquor, { headers: this.getHeaders() })
  }

  deleteLiquor(id: number) {
    return this.http.delete(`${Api}/Liquors/Delete/${id}`, { headers: this.getHeaders() })
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
