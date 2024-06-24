import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../../marathon/centers/services/courses.service";
import {MatTableDataSource} from "@angular/material/table";
import {Profile} from "../../marathon/participants/model/profile";
import {ThemePalette} from "@angular/material/core";
import {TopicsService} from "../../marathon/centers/services/topics.service";
import {TopicCoursesService} from "../../marathon/centers/services/topic-courses.service";
import {DataService} from "../../shared/services/data.service";
import {CourseComment} from "../../marathon/centers/model/courseComment";
import {Course} from "../../marathon/centers/model/course";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topicCourses: Array<Course> = []
  background: ThemePalette = undefined;
  links: Array<any> = [];
  activeLink = this.links[0];

  constructor(private topicsService: TopicsService, private topicCoursesService: TopicCoursesService,
              private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    this.getAllTopics()
  }

  getAllTopics() {
    this.topicsService.getAll().subscribe((topics: any) => {
      this.links = topics
      console.log(this.links)
      this.activeLink = this.links[0];
      this.getTopicCourses(this.activeLink.id)
    })
  }

  getTopicCourses(topicId: number): void {
    /*this.topicCoursesService.getAllByTopicId(topicId)
    this.dataService.globalDataTopicCourses$.subscribe(data => {
      this.topicCourses = data;
    });*/
    this.topicsService.getById(topicId).subscribe((topic: any) => {
      this.topicCourses = topic.coursesResources
      console.log(this.topicCourses)
    })
  }

  goToCourse(id: number){
    localStorage.setItem("courseId", id.toString())
    this.router.navigateByUrl('/course').then()
  }

}
