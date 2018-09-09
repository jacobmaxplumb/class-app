import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Meteor } from 'meteor/meteor';
import { LoginPage } from './views/login/login';
import { SchedulePage } from './views/schedule';
import { DashBoard } from './views/dashboard';
import { CoursesView } from './views/courses';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  homePage = DashBoard;
  coursesView = CoursesView;
  loginPage = LoginPage;
  schedulePage = SchedulePage;

  get isLoggedIn(): boolean {
    return (Meteor.user()) ? true : false
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = Meteor.user() ? DashBoard : LoginPage
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }

  logOut() {
    Meteor.logout();
  }
}

