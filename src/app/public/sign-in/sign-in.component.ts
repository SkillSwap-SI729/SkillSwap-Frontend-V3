import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../marathon/centers/services/authService";
import {UsersService} from "../../marathon/centers/services/users.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit,AfterViewInit {

  signInRequest: any
  submitted = false
  incorrectAuth = false

  constructor(private router: Router, private authService: AuthService,
              private userService: UsersService,) {
    this.signInRequest = {} as any;
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  sendAuth() {

    if(this.signInRequest.username != ""  && this.signInRequest.username != undefined
      && this.signInRequest.password != "" && this.signInRequest.password != undefined)
    {
      this.authService.create(this.signInRequest).subscribe((response: any)=>{
        localStorage.setItem("userId2", response.id)
        localStorage.setItem("token", response.token)
        console.log(localStorage.getItem("userId2"));

        this.userService.getById(response.id).subscribe((response) => {
          localStorage.setItem("userRoles", response.roles)
          console.log("userRoles",response.roles)
        })

        this.router.navigateByUrl('/home');
      })
    }

  }

  goToSignUpPage(){
    this.router.navigateByUrl('/sign-up');
  }

}
