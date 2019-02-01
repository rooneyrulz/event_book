import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  constructor() { }

  //Validate Name
  validateName(name: string): boolean {
    const regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(String(name));
  }

  //Validate Email Id
  validateEmail(email:string):boolean {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email));
  }

  //Validate Username
  validateUsername(username:string):boolean {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(String(username));
  }

  //Validate Password
  validatePassword(password:string, password2:string):boolean {
    return password === password2;
  }

  //Validate Event Name
  validateEventName(event:string):boolean {
    const regex = /^[a-zA-Z ]{10,30}$/;
    return regex.test(String(event));
  }

  //Validate Price
  validatePrice(price:string):boolean {
    return null;
  }
}
