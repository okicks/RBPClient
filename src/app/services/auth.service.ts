import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
 
const Api = 'https://localhost:44310';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  
  constructor(private http: HttpClient, private router: Router) { }

  register(regUserData: RegisterUser) {
    return this.http.post(`${Api}/Api/Account/Register`, regUserData);
  }
  
  login(loginInfo) {
    const authString = 
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api}/token`, authString).subscribe((token : Token) => {
      //return this.http.get(`${Api}/Api/Account/token`, { headers: this.setHeaders() } ).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem(`id_token`, token.access_token);
      this.isLoggedIn.next(true);
      this.router.navigate(['/']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem(`id_token`)) {
       return new Observable(observer => observer.next(false));
     }
    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  
   return this.http.get(`${Api}/api/Account/UserInfo`, { headers: authHeader });
  }
  
  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    this.http.post(`${Api}/api/Account/Logout`, { headers: this.setHeaders() });
    this.router.navigate(['/login']);
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
