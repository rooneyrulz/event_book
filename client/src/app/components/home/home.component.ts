import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title_1: string;
  title_2: string;
  constructor() { }

  ngOnInit() {
    this.title_1 = "Event";
    this.title_2 = "Book";
  }

}
