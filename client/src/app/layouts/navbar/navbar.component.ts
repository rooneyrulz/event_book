import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { NgFlashMessageService } from "ng-flash-messages";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {}

  onHandleLogOut() {
    this.authService.logOutUser();
    this.flashMessage.showFlashMessage({
      messages: ['You are loged out!'],
      dismissible: true,
      timeout: 3000,
      type: 'success'
    });
    this.router.navigate(['login']);
  }
}
