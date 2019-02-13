import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Event } from "../../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  user: object = null;
  token: string = null;
  constructor(
    private http: HttpClient
  ) {
    console.log(`items service injected...`);
  }

  onLoadUserData() {
    this.user = JSON.parse(localStorage.getItem('access_user'));
    this.token = localStorage.getItem('access_token');
  }

  createUserEvent(event:object):Observable<Event> {
    this.onLoadUserData();
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    });
    return this.http.post<Event>(`event/create`, event, { headers: headers });
  }

  fetchUserEvents(id:string): Observable<Event> {
    this.onLoadUserData();
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    });
    return this.http.get<Event>(`event/${id}`, { headers: headers });
  }

  deleteUserEvent(id:string):Observable<Event> {
    this.onLoadUserData();
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    });
    return this.http.delete<Event>(`event/${id}`, { headers: headers });
  }

}
