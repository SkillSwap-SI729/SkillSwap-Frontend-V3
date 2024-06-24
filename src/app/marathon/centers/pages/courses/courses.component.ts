import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TutorCoursesService} from "../../services/tutor-courses.service";
import {DataService} from "../../../../shared/services/data.service";
import {Course} from "../../model/course";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {
  coursesOfUser: Array<Course> = [];

  constructor(private tutorCoursesService:TutorCoursesService, private dataService: DataService,
              private router: Router) {
    this.dataService.globalData$.subscribe(data => {
      this.coursesOfUser = data;
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses(): void {
    console.log(localStorage.getItem('userId'))
    this.tutorCoursesService.getAllByUserId(localStorage.getItem('userId'))
  }
  goToCourse(courseId: number): void {
    localStorage.setItem('courseId', JSON.stringify(courseId))
    this.router.navigateByUrl('/course').then()
  }

  protected readonly localStorage = localStorage;
}
