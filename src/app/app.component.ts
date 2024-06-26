import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'upc2301si729eau20201c773';

  protected readonly localStorage = localStorage;

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    console.log("userId2", localStorage.getItem("userId2"));
  }

  logOut(): void {
    localStorage.removeItem("userId2");
    localStorage.removeItem("token");
    localStorage.removeItem("userRoles");
    this.router.navigateByUrl('/home');
  }
  goToMyProfilePage(){
    localStorage.setItem("goingToProfileMode", "myProfile");

    this.router.navigateByUrl('/user').then(() => {
      window.location.reload();
    });
  }
}
