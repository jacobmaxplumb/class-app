import { Courses } from './../../../api/server/collections/courses';
import { Course } from './../../../api/server/models';
import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { NavController, ModalController } from 'ionic-angular';
import { CourseDetailPage } from '../../pages/home/pages/courses/course-detail/course-detail';
import { NewCourseModal } from '../../pages/home/pages/courses/new-course/new-course';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-buttons left>
        <button ion-button icon-only menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
      </ion-buttons>
      <ion-title class="center-title">
        Courses
      </ion-title>
      <ion-buttons right>
        <button ion-button icon-only (click)="addCourse()">
          <ion-icon name="add"></ion-icon>
        </button>
      </ion-buttons>
    </ion-navbar>
  </ion-header>

  <ion-content>
    <button ion-button full style="height: 25%" *ngFor="let course of courses | async" (click)="courseClicked(course)">
      {{course.name}} </button>
  </ion-content>
  `
})
export class CoursesView {
  courses: Observable<Course[]>;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {}

  ngOnInit() {
    Courses.find({}).subscribe((d) => {
      console.log(d)
    })
    this.courses = Courses.find({});
  }

  courseClicked(course) {
    this.navCtrl.setRoot(CourseDetailPage, course);
  }

  addCourse() {
    const modal = this.modalCtrl.create(NewCourseModal, {}, {enableBackdropDismiss: false});
    modal.present();
  }
}
