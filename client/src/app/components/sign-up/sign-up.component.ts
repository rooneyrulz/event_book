import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { NgFlashMessageService } from "ng-flash-messages";

import { AuthService } from "../../services/auth.service";
import { ValidateService } from "../../services/validate.service";

//Import User Model
import { User } from "../../../models/user.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {}

  onHandleRegister(form: NgForm) {
    const user = {
      name: form.value.name,
      email: form.value.email,
      username: form.value.username,
      password: form.value.password,
      password2: form.value.password2
    };
    if (!this.validateService.validateName(user.name)) {
      this.flashMessage.showFlashMessage({
        messages: ['Invalid Name!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      this.router.navigate(['sign-up']);
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.showFlashMessage({
        messages: ['Invalid Email Id!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      this.router.navigate(['sign-up']);
      return false;
    }

    if (!this.validateService.validateUsername(user.username)) {
      this.flashMessage.showFlashMessage({
        messages: ['Invalid Username!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      this.router.navigate(['sign-up']);
      return false;
    }

    if (!this.validateService.validatePassword(user.password, user.password2)) {
      this.flashMessage.showFlashMessage({
        messages: ['Password not matched!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      this.router.navigate(['sign-up']);
      return false;
    } else {
      this.authService.createUser(user).subscribe((data:User) => {
        if (!data) {
          this.flashMessage.showFlashMessage({
            messages: ['Something went wrong...!'],
            dismissible: true,
            timeout: 3000,
            type: 'danger'
          });
          this.router.navigate(['sign-up']);
          return false;
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['User created successfully!'],
            dismissible: true,
            timeout: 3000,
            type: 'success'
          });
          this.router.navigate(['login']);
          form.resetForm();
          return true;
        }
      });
    }
  }
}
