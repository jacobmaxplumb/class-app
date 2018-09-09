import { OnInit, Component } from '@angular/core';
import { Course } from './../../../../../../api/server/models';
import { NavController, NavParams } from 'ionic-angular';
import { CoursesPage } from '../courses';

@Component({
  templateUrl: 'course-detail.html'
})
export class CourseDetailPage implements OnInit {
  course: Course;

  constructor(private navParams: NavParams, private navCtrl: NavController) {}

  ngOnInit() {
    this.course = this.navParams.data;
    console.log(this.course);
  }

  backToCourses() {
    this.navCtrl.setRoot(CoursesPage);
  }
}
