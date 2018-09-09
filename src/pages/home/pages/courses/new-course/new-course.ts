import { MeteorObservable } from 'meteor-rxjs';
import { Course } from './../../../../../../api/server/models';
import { Component } from "@angular/core";
import { ViewController, AlertController } from 'ionic-angular';
import { Courses } from '../../../../../../api/server/collections/courses';

@Component({
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Add Course
      </ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>

      <ion-item>
        <ion-label fixed>Name</ion-label>
        <ion-input type="text" [(ngModel)]="newCourse.name"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label fixed>Start Date</ion-label>
        <ion-input type="date" [(ngModel)]="newCourse.startDate"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label fixed>End Date</ion-label>
        <ion-input type="date" [(ngModel)]="newCourse.endDate"></ion-input>
      </ion-item>

      <button ion-button block (click)="addCourse()">Add Course</button>

    </ion-list>
  </ion-content>


  `
})
export class NewCourseModal {

  constructor(private viewCtrl: ViewController, private alertCtrl: AlertController) {}

  newCourse: Course = {
    name: null,
    startDate: null,
    endDate: null,
    assignments: [],
    grade: null
  }

  addCourse() {
    if (this.newCourse.name === null || this.newCourse.startDate === null || this.newCourse.endDate === null) {
      this.alertCtrl.create({
        title: 'Error',
        subTitle: 'You need to fill out all fields',
        buttons: ['Ok']
      }).present();
    } else {
      MeteorObservable.call('addCourse', this.newCourse);
      this.viewCtrl.dismiss();
    }

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
