import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string;
  currentUser: string = null;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.title = "Welcome";
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.authService.getCurrentUser().subscribe(user => {
      if (!user) {
        //
      }
      this.currentUser = user.name;
    });
  }

}
