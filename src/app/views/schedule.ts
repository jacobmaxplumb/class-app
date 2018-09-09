import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'schedule',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-buttons left>
          <button ion-button icon-only menuToggle>
            <ion-icon name="menu"></ion-icon>
          </button>
        </ion-buttons>
        <ion-title class="center-title">
          Schedule
        </ion-title>
        <ion-buttons right>
          <button ion-button icon-only>
            <ion-icon name="add"></ion-icon>
          </button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <ion-calendar #calendar></ion-calendar>
    </ion-content>
  `
})
export class SchedulePage implements OnInit {

  constructor() {}

  ngOnInit() {}
}
