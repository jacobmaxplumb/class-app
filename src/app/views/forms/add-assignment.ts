import { Assignment } from './../../../../api/server/models';
import { Component } from "@angular/core";

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Add Assignment</ion-title>

      <ion-buttons end>
        <button ion-button class="done-button" (click)="login()">Done</button>
      </ion-buttons>
    </ion-navbar>
  </ion-header>

  <ion-content padding class="login-page-content">
    <ion-list>

    <ion-item>
      <ion-label>Title</ion-label>
      <ion-input type="text" [(ngModel)]="assignment.title"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Day to Start</ion-label>
      <ion-input type="date" [(ngModel)]="assignment.startDate"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Due Date</ion-label>
      <ion-input type="date" [(ngModel)]="assignment.dueDate"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Type</ion-label>
      <ion-input type="text" [(ngModel)]="assignment.type"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Problems / Pages </ion-label>
      <ion-input type="text" [(ngModel)]="setString"></ion-input>
    </ion-item>

  </ion-list>

  <div padding>
    <button ion-button block (click)="addAssignement()">Add Assignment</button>
  </div>
  </ion-content>
  `
})
export class AddAssignment {
  setString: string;
  assignment: Assignment = {
    title: null,
    type: null,
    dueDate: null,
    startDate: null,
    set: [],
  }

  addAssignmnet() {
    const splitSet = this.setString.split(',');
    splitSet.forEach((thing) => {
      let th = parseInt(thing);
      this.assignment.set.push(th);
    });
    console.log(this.assignment);
  }
}
