import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

import { NgFlashMessageService } from "ng-flash-messages";

import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private flashMessage: NgFlashMessageService,
    private authService: AuthService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      this.flashMessage.showFlashMessage({
        messages: ['Please login first!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
