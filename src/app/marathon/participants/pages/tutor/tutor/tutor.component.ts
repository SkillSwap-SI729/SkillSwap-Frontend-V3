import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Profile} from "../../../model/profile";
import {CoursesService} from "../../../../centers/services/courses.service";
import {Router} from "@angular/router";
import {CourseSectionsService} from "../../../../centers/services/course-sections.service";
import {DataService} from "../../../../../shared/services/data.service";
import {SectionLessonsService} from "../../../../centers/services/section-lessons.service";
import {Course} from "../../../../centers/model/course";
import {TutorCoursesService} from "../../../../centers/services/tutor-courses.service";
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardSmImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {UserCommentsService} from "../../../services/user-comments.service";
import {UserComment} from "../../../model/userComment";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {ProfilesService} from "../../../../centers/services/profilesService";
import {InstructorsService} from "../../../services/instructors.service";
import {User} from "../../../model/user";
import {Instructor} from "../../../model/Instructor";
import {UsersService} from "../../../../centers/services/users.service";
import {toNumber} from "lodash";

@Component({
  selector: 'app-tutor',

  templateUrl: './tutor.component.html',
  styleUrl: './tutor.component.css'
})
export class TutorComponent implements OnInit, AfterViewInit{
  editProfileDialog = false;
  course: any;
  profileData: Profile;
  profileUpdateRequest: any;
  newCourseDialog = false;
  userData: any;
  instructorCourses: Array<Course> = [];
  tutorComments: Array<UserComment>=[];

  constructor(private profilesService: ProfilesService, private instructorsService: InstructorsService,
              private courseService: CoursesService,
              private userService: UsersService, private router: Router) {

    this.profileData = {} as Profile
    this.userData = {} as any
    this.course = {} as any
    this.profileUpdateRequest = {} as any;

  }

  getProfileData(){
    this.instructorsService.getById(localStorage.getItem('instructorId')).subscribe(
      instructor => {
        this.profilesService.getById(instructor.profileId)
          .subscribe((profileResponse: any) => {
            this.profileData = profileResponse;
            this.userService.getById(profileResponse.userId).subscribe((user: any) => {
              this.userData = user;
            })
          })
    })

  }

  updateProfile(){


    var index = this.profileData.personName.lastIndexOf(" ")
    this.profileUpdateRequest.firstName = this.profileData.personName.substring(0, index);
    this.profileUpdateRequest.lastName = this.profileData.personName
      .substring(index+1, this.profileData.personName.length);
    this.profileUpdateRequest.photoUrl = this.profileData.photoUrl
    this.profileUpdateRequest.slogan = this.profileData.slogan
    this.profileUpdateRequest.aboutMe = this.profileData.aboutMe

    console.log("updateRequest",this.profileUpdateRequest);
    this.profilesService.update(toNumber(localStorage.getItem('instructorId'))
      , this.profileUpdateRequest).subscribe(
      (profile)=>{
        this.profileData = {...profile};
      }
    )
  }

  getInstructorData(){
    this.instructorsService.getById(localStorage.getItem('instructorId'))
      .subscribe((instructor: any) => {
        this.instructorCourses = instructor.coursesResources;
      })
  }

  goToCourse(courseId: number): void {
    localStorage.setItem('courseId', courseId.toString())
    this.router.navigateByUrl('/course').then()
  }
  ngAfterViewInit(): void {
  }

  saveCourse(){

    this.course.instructorId = toNumber(localStorage.getItem("instructorId"))
    this.course.cost = toNumber(this.course.cost)
    this.course.nHours = toNumber(this.course.nHours)

    this.course.rating = 0
    this.course.nRatings = 0
    this.course.nStudents = 0

    console.log("course",this.course);
    this.courseService.create(this.course).subscribe((course: any) => {
      this.instructorCourses.push(course)
      this.course = {}
    })
  }
  ngOnInit(): void {
    this.getProfileData()
    this.getInstructorData()
  }

  protected readonly localStorage = localStorage;
}
