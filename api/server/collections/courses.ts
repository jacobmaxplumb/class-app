import { MongoObservable } from 'meteor-rxjs';
import { Course } from '../models';

export const Courses = new MongoObservable.Collection<Course>('courses');
