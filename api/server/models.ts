import { Course, Assignment } from './models';
import { Moment } from 'moment';
export const DEFAULT_PICTURE_URL = '/assets/default-profile-pic.svg';

export interface Profile {
  name?: string;
  picture?: string;
}

export interface Semester {
  year?: number;
  type?: string;
  courses?: Course[];
}

export interface Course {
  name?: string;
  creditHours?: number;
  teacher?: Teacher;
  startDate?: Date;
  endDate?: Date;
  grade?: string;
  assignments?: Assignment[];
  days?: ClassDay[];
}

export interface Assignment {
  title?: string;
  type?: string;
  startDate?: string;
  dueDate?: string;
  set?: number[];
  courseId?: string;
}

export interface Example {
  prop1?: string;
}

export interface CalendarEvent {
  start?: Date;
  end?: Date;
  assignmentId?: string;
  courseId?: string;
}

export interface ClassDay {
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
}

export interface Teacher {
  name?: string
}

export interface Book {
  courseId?: string;
  title?: string;
}

export interface User extends Meteor.User {
  profile?: Profile;
}
