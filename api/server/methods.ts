import { Profile, Course } from './models';
import { Examples } from './collections/examples';
import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Courses } from './collections/courses';

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
  updateProfile(profile: Profile): void {
    if (!this.userId) throw new Meteor.Error('unauthorized',
      'User must be logged-in to create a new chat');

    check(profile, {
      name: nonEmptyString
    });

    Meteor.users.update(this.userId, {
      $set: {profile}
    });
  },
  addCourse(course: Course) {
    if (!this.userId) throw new Meteor.Error('unauthorized',
      'User must be logged-in to create a new chat');

    check(course.name, nonEmptyString)
    check(course.startDate, nonEmptyString)
    check(course.endDate, nonEmptyString)

    return {
      course: Courses.insert(course)
    }
  },
  addEample(example) {
    if (!this.userId) throw new Meteor.Error('unauthorized',
      'User must be logged-in to create a new chat');

    check(example, nonEmptyString);

    const exampleExists = !!Examples.collection.find(example).count();

    if (!exampleExists) {
      throw new Meteor.Error('example-not-exists',
        'Chat doesn\'t exist');
    }

    return {
      example: Examples.collection.insert(example)
    };
  }
});
