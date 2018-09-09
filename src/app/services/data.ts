import { Course } from './../../../api/server/models';
import { Injectable } from "@angular/core";
import { Courses } from '../../../api/server/collections/courses';

@Injectable()
export class DataService {
  courses: Course[];
  numOfCourses: number;

  getCourses() {
    Courses.find({}).subscribe((cs) => {
      this.courses = cs;
      this.numOfCourses = cs.length;
    })
  }
}
