import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

import { NgFlashMessageService } from "ng-flash-messages";

import { EventService } from "../../services/event.service";

//Import Models
import { Event } from "../../../models/event.model";
import { CreatedEvent } from "../../../models/createdEvent.model";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  id: string = null;
  UserEvent: CreatedEvent[];
  constructor(
    private eventService: EventService,
    private flashMessage: NgFlashMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem('access_user')).id;
    this.getUserEvents();
  }

  getUserEvents() {
    this.eventService.fetchUserEvents(this.id).subscribe((data:Event) => {
      this.UserEvent = data.createdEvents
    });
  }

  removeUserEvent(id:string) {
    if (confirm('Are you sure you want to remove this event from list?')) {
      this.eventService.deleteUserEvent(id).subscribe((data: Event) => {
        if (!data) {
          this.flashMessage.showFlashMessage({
            messages: ['Something went wrong, try again later!'],
            dismissible: true,
            timeout: 3000,
            type: 'danger'
          });
          this.router.navigate(['items']);
          return false;
        } else {
          this.flashMessage.showFlashMessage({
            messages: ["Event deleted successfully, Let's add one!"],
            dismissible: true,
            timeout: 3000,
            type: 'success'
          });
          this.router.navigate(['item/create']);
          return true;
        }
      });
    } else {
      this.router.navigate(['items']);
      return false;
    }
  }
}
