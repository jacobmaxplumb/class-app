import { Component, OnInit } from "@angular/core";
import { NavController } from 'ionic-angular';
import { AddAssignment } from './forms/add-assignment';
import { Semester } from "api/models";
import * as moment from 'moment';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <button ion-button icon-only menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title class="center-title">
        Home
      </ion-title>
      <ion-buttons end>
          <button ion-button icon-only (click)="doSomething()">
              <ion-icon name="settings"></ion-icon>
            </button>
      </ion-buttons>
    </ion-navbar>
  </ion-header>

  <ion-content>
    <ion-calendar #calendar [events]="events"></ion-calendar>
  </ion-content>
  `
})
export class DashBoard implements OnInit {

  semester: Semester = {
    year: 2018,
    type: 'Fall',
    courses: []
  };

  events = [];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.semester.courses = [
      {
        name: 'Biology',
        creditHours: 4,
        startDate: new Date('2018-09-01'),
        endDate: new Date('2019-05-01'),
        grade: '',
        assignments: [],
        days: [
          {
            dayOfWeek: 0,
            startTime: '12:00pm',
            endTime: '2:00pm'
          },
          {
            dayOfWeek: 2,
            startTime: '12:00pm',
            endTime: '2:00pm'
          }
        ]
      }
    ];
    let start = moment(this.semester.courses[0].endDate);
    let end = moment(this.semester.courses[0].endDate);
    const diff = end.diff(start, 'days');
    for (let i = 0; i < diff; i++) {
      const date = start.toDate();
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      this.events.push({
        year: year,
        month: month,
        day: day
      })
    }

  }

  doSomething() {
    this.navCtrl.setRoot(AddAssignment);
  }

}
