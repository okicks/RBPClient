import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';

const Api = 'https://localhost:44310';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(regUserData: RegisterUser) {
    return this.http.post(`${Api}/API/Account/Register`, regUserData);
  }
}
