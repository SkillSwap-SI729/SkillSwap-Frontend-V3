import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/home/home.component";
import {TutorsComponent} from "./marathon/participants/pages/participants/tutors.component";
import {CoursesComponent} from "./marathon/centers/pages/courses/courses.component";
import {CourseComponent} from "./marathon/course/course/course.component";
import {TutorComponent} from "./marathon/participants/pages/tutor/tutor/tutor.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: TutorsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course', component: CourseComponent },
  { path: 'user', component: TutorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
