import { Courses } from './../../../../../api/server/collections/courses';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../../api/server/models';
import { NavController, ModalController } from 'ionic-angular';
import { CourseDetailPage } from './course-detail/course-detail';
import { NewCourseModal } from './new-course/new-course';

@Component({
  templateUrl: 'courses.html'
})
export class CoursesPage implements OnInit {
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
