import { AddAssignment } from './views/forms/add-assignment';
import { SchedulePage } from './views/schedule';
import { NewCourseModal } from './../pages/home/pages/courses/new-course/new-course';
import { CoursesPage } from './../pages/home/pages/courses/courses';
import { LoginPage } from './views/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MomentModule } from 'angular2-moment';
import { MyApp } from './app.component';
import { VerificationPage } from './views/verification/verfication';
import { PhoneService } from './services/phone';
import { CalendarModule } from 'ionic3-calendar-en';
import { DataService } from './services/data';
import { CourseDetailPage } from '../pages/home/pages/courses/course-detail/course-detail';
import { DashBoard } from './views/dashboard';
import { CoursesView } from './views/courses';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    VerificationPage,
    CoursesPage,
    CourseDetailPage,
    NewCourseModal,
    SchedulePage,
    DashBoard,
    CoursesView,
    AddAssignment
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MomentModule,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    VerificationPage,
    CoursesPage,
    CourseDetailPage,
    NewCourseModal,
    SchedulePage,
    DashBoard,
    CoursesView,
    AddAssignment
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhoneService,
    DataService
  ]
})
export class AppModule {}
