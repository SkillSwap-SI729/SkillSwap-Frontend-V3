import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Profile} from "../../../model/profile";
import {CoursesService} from "../../../../centers/services/courses.service";
import {Router} from "@angular/router";
import {CourseSectionsService} from "../../../../centers/services/course-sections.service";
import {DataService} from "../../../../../shared/services/data.service";
import {SectionLessonsService} from "../../../../centers/services/section-lessons.service";
import {Course} from "../../../../centers/model/course";

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

  userLoggedId: any ;
  userRoles: any;
  editProfileDialog = false;
  course: any;
  profileData: Profile;
  profileUpdateRequest: any;
  newCourseDialog = false;
  userData: any;
  instructorData: any;
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

    if(localStorage.getItem("goingToProfileMode")== "otherProfile")
    {
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
    else if(localStorage.getItem("goingToProfileMode")== "myProfile"){
      this.profilesService.getByUserId(localStorage.getItem('userId2')).subscribe((profileResponse: any) => {
        this.profileData = profileResponse;
        this.instructorsService.getByProfileId(profileResponse.id).subscribe((instructor: any) => {
          localStorage.setItem("instructorId", instructor.id);
        })
        }
      )

      this.userService.getById(localStorage.getItem('userId2')).subscribe((user: any) => {
        this.userData = user;
      })
    }


  }

  profileType(): String
  {
    if(this.userData.roles.length == 2)
    {
      return "Instructor"
    }
    else {
      return "Student"
    }

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
    this.profilesService.update(this.profileData.id
      , this.profileUpdateRequest).subscribe(
      (profile)=>{
        this.profileData = {...profile};
      }
    )
  }

  getInstructorData(){

    if(localStorage.getItem("goingToProfileMode")== "otherProfile"){
      this.instructorsService.getById(localStorage.getItem('instructorId'))
        .subscribe((instructor: any) => {
          this.instructorCourses = instructor.coursesResources;
        })
    }
    else if(localStorage.getItem("goingToProfileMode")== "myProfile"){
      this.userService.getById(localStorage.getItem('userId2')).subscribe((user: any) => {
        this.profilesService.getByUserId(user.id).subscribe((profile: any) => {
          this.instructorsService.getByProfileId(profile.id).subscribe((instructor: any) => {
            localStorage.setItem("instructorId", instructor.id);
            this.instructorCourses = instructor.coursesResources;
          })
        })
      })
    }

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
    console.log(localStorage.getItem('goingToProfileMode'))
    this.getProfileData()
    this.getInstructorData()
    this.getSessionData()
    console.log("instructorId",localStorage.getItem('instructorId'))
  }

  getSessionData(){
    this.userLoggedId = localStorage.getItem("userId2")
    this.userRoles = localStorage.getItem("userRoles")
  }

  protected readonly localStorage = localStorage;
}
