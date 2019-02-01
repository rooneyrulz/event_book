import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { NgFlashMessageService } from "ng-flash-messages";

import { AuthService } from "../../services/auth.service";
import { ValidateService } from "../../services/validate.service";

//Import User Model
import { Auth } from "../../../models/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private flashMessage: NgFlashMessageService,
    private router: Router
  ) { }

  ngOnInit() {}

  onAuthenticateUser(form: NgForm) {
    let user = {
      username: form.value.username,
      password: form.value.password
    };
    if (!this.validateService.validateUsername(user.username)) {
      this.flashMessage.showFlashMessage({
        messages: ['Invalid Username!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      this.router.navigate(['login']);
      return false;
    } else {
      this.authService.authenticateUser(user).subscribe((data:Auth) => {
        if (data) {
          const { token, user } = data;
          this.authService.storeUserData(token, user);
          this.flashMessage.showFlashMessage({
            messages: ['You are logged in!'],
            dismissible: true,
            timeout: 3000,
            type: 'success'
          });
          this.router.navigate(['dashboard']);
          form.resetForm();
          return true;
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['User not found!'],
            dismissible: true,
            timeout: 3000,
            type: 'danger'
          });
          this.router.navigate(['login']);
          return false;
        }
      });
    }
  }
}
