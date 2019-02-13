import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

//Import Models
import { User } from "../../models/user.model";
import { Auth } from "../../models/auth.model";
import { CurrentUser } from "../../models/currentUser.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: object = null;
  token: string = null;
  constructor(
    private http: HttpClient
  ) {
    console.log(`auth service injected!`);
  }

  //Get Current User
  getCurrentUser():Observable<CurrentUser> {
    this.onLoadUserData();
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    });
    return this.http.get<CurrentUser>(`user/current`, { headers: headers });
  }

  //Register User
  createUser(user: object): Observable<User> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<User>(`user/create`, user, { headers: headers });
  }

  //Authenticate User
  authenticateUser(user: object): Observable<Auth> {
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<Auth>(`user/authenticate`, user,  { headers: headers });
  }

  //Store Token & User on Local Storage
  storeUserData(token: string, user: object) {
    this.user = user;
    this.token = token;
    localStorage.setItem('access_token', token);
    localStorage.setItem('access_user', JSON.stringify(user));
  }

  isLoggedIn():boolean {
    return localStorage.getItem('access_token') !== null;
  }

  logOutUser():void {
    this.user = null;
    this.token = null;
    localStorage.clear();
  }

  onLoadUserData() {
    this.token = localStorage.getItem('access_token');
    this.user = JSON.parse(localStorage.getItem('access_user'));
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}
