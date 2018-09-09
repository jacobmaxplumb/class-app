import { MongoObservable } from 'meteor-rxjs';
import { Semester } from '../models';

export const Semesters = new MongoObservable.Collection<Semester>('semesters');
