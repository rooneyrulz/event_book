import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { NgFlashMessageService } from "ng-flash-messages";

import { EventService } from "../../services/event.service";
import { ValidateService } from "../../services/validate.service";

import { Event } from "../../../models/event.model";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(
    private router: Router,
    private flashMessage: NgFlashMessageService,
    private eventService: EventService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {}

  onHandleSubmit(form: NgForm) {
    let event = {
      name: form.value.name,
      price: form.value.price
    };
    if (!this.validateService.validateEventName(event.name)) {
      this.flashMessage.showFlashMessage({
        messages: ['Invalid Event!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      this.router.navigate(['item/create']);
      return false;
    } else {
      this.eventService.createUserEvent(event).subscribe((data:Event) => {
        if (!data) {
          this.flashMessage.showFlashMessage({
            messages: ['Something went wrong!'],
            dismissible: true,
            timeout: 3000,
            type: 'danger'
          });
          this.router.navigate(['item/create']);
          return false;
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['Your event added successfully!'],
            dismissible: true,
            timeout: 3000,
            type: 'success'
          });
          this.router.navigate(['item/create']);
          form.resetForm();
        }
      });
    }
  }
}
