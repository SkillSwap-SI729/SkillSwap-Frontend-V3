import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CoursesService} from "../../centers/services/courses.service";
import {Course} from "../../centers/model/course";
import {Router} from "@angular/router";
import {DataService} from "../../../shared/services/data.service";
import {Lesson} from "../../centers/model/lesson";
import {CourseCommentsService} from "../../centers/services/course-comments.service";
import {LearningPathItemsService} from "../../centers/services/learningPathItems.service";
import {InstructorsService} from "../../participants/services/instructors.service";
import {ProfilesService} from "../../centers/services/profilesService";
import {UsersService} from "../../centers/services/users.service";
import {LessonsService} from "../../centers/services/lessonsService";
import {SectionsService} from "../../centers/services/sectionsService";
import {toInteger, toNumber} from "lodash";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit, AfterViewInit {
  userRoles: any;
  currentSessionInstructorId: any;
  userLoggedId: any;
  lesson: any;
  section: any;
  currentSectionId: any;
  newLessonDialog = false;
  newSectionDialog = false;
  panelOpenState = false;
  courseData: Course
  sections: Array<any> = [];
  sectionLessons: Array<Lesson> = [];
  courseComments: Array<any> = []
  courseTutorUsername: string = "default"

  constructor(private coursesService: CoursesService, private router: Router,
              private sectionsService: SectionsService,
              private learningPathItemsService: LearningPathItemsService,
              private lessonsService: LessonsService,
              private instructorService: InstructorsService,
              private profileService: ProfilesService,
              private userService: UsersService) {
    this.courseData = {} as Course
    this.lesson = {} as any
    this.section = {} as any

  }


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.getCourseData()
    this.getSessionData()
  }


  getCourseData() {
    this.coursesService.getById(localStorage.getItem('courseId'))
      .subscribe((course: any) => {
        this.courseData = course
        this.courseComments = course.courseCommentResources
        this.instructorService.getById(course.instructorId).subscribe((instructor: any) => {
          this.profileService.getById(instructor.profileId).subscribe((profile: any) => {
            this.userService.getById(profile.userId).subscribe((user: any) => {
              this.courseTutorUsername = user.username;
            })
          })
        })
        this.sections = course.learningPathResource.learningPathItemsResources;
      })


  }

  getSectionLessons(sectionId: number): void {
    this.currentSectionId = sectionId;
    this.learningPathItemsService.getById(sectionId).subscribe((learningPathItem: any) => {
      this.sectionLessons = learningPathItem.lessonResources
      console.log(this.sectionLessons)
    })
  }

  getLessonVideo(videoInfo: any): void {

  }

  saveLesson(){
    this.lesson.learningPathItemId = this.currentSectionId;
    console.log("lesson",this.lesson);
    this.lessonsService.create(this.lesson).subscribe((lesson: any) => {
      this.sectionLessons.push(lesson)
      this.lesson = {}
    })
  }

  saveSection(){

    this.section.courseId = toNumber(localStorage.getItem("courseId"))
    this.section.nLessons = toNumber(this.section.nLessons)
    console.log("section",this.section);
    this.sectionsService.create(this.section).subscribe((section: any) => {
      this.sections.push(section)
      this.section = {}
    })
  }

  goToTutorPage(instructorId: number): void {
    localStorage.setItem("goingToProfileMode", "otherProfile");
    localStorage.setItem('instructorId', instructorId.toString());
    console.log(localStorage.getItem("instructorId"))
    this.router.navigateByUrl('/user').then()
  }

  getSessionData(){
    this.userLoggedId = localStorage.getItem('userId2');
    this.userRoles = localStorage.getItem('userRoles')

    if(this.userLoggedId){

      if(this.userRoles.includes("ROLE_INSTRUCTOR")){
        this.profileService.getByUserId(this.userLoggedId).subscribe((profile: any) => {
          this.instructorService.getByProfileId(profile.id).subscribe((instructor: any) => {
            this.currentSessionInstructorId = instructor.id ;


          })
        })
      }

    }
  }

  protected readonly localStorage = localStorage;
  protected readonly toNumber = toNumber;
}
