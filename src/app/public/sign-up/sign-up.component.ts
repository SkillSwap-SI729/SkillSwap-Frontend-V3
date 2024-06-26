import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {InstructorsService} from "../../marathon/participants/services/instructors.service";
import {StudentsService} from "../../marathon/centers/services/studentsService";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit, AfterViewInit {

  userType: any
  student: any
  instructor: any
  signUpRequest: any
  successfulAccountCreation = false
  submitted = false
  incorrectAuth = false

  constructor(private router: Router, private instructorsService: InstructorsService,
              private studentsService: StudentsService) {
    this.signUpRequest = {} as any;
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  sendAuth() {

    if(this.signUpRequest.firstName != "" && this.signUpRequest.firstName != undefined
      && this.signUpRequest.lastName != "" && this.signUpRequest.lastName != undefined
      && this.signUpRequest.email != ""   && this.signUpRequest.email != undefined
      && this.signUpRequest.username != ""  && this.signUpRequest.username != undefined
      && this.signUpRequest.password != "" && this.signUpRequest.password != undefined
      && this.userType != undefined){

      console.log("userType", this.userType)

      this.signUpRequest.photoUrl = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
      this.signUpRequest.ranking = 0
      this.signUpRequest.numberCourses = "0"
      this.signUpRequest.aboutMe = "Put a description about you!"
      this.signUpRequest.slogan = "Put a slogan that describes you!"
      this.signUpRequest.nRatings = 0
      this.signUpRequest.nStudents = 0

      if(this.userType === "student"){
        console.log("signUpRequest",this.signUpRequest)
        this.studentsService.create(this.signUpRequest).subscribe((res: any) => {
          this.successfulAccountCreation = true;
          this.signUpRequest = {}
          this.submitted = false
        })
      }
      else if (this.userType === "instructor") {
        this.instructorsService.create(this.signUpRequest).subscribe((res: any) => {
          this.successfulAccountCreation = true;
          this.signUpRequest = {}
          this.submitted = false
        })
      }
    }





  }

  goToSignInPage() {
    this.router.navigateByUrl('/sign-in');
  }

}
