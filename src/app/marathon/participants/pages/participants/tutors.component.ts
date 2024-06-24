import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {InstructorsService} from "../../services/instructors.service";
import * as _ from "lodash";
import {Profile} from "../../model/profile";
import {Router} from "@angular/router";
import {ProfilesService} from "../../../centers/services/profilesService";
import {forEach} from "lodash";


@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit, AfterViewInit {

  tutorData: Profile;
  profiles: MatTableDataSource<any>;
  displayedColumns: string[] = ['username', 'photoUrl','ranking','numberCourses'];

  @ViewChild('tutorForm', {static: false})
  tutorForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private router: Router, private instructorsService: InstructorsService,
              private profilesService: ProfilesService) {
    this.tutorData = {} as Profile;
    this.profiles = new MatTableDataSource<Profile>();
  }

  ngOnInit(): void {
    this.profiles.paginator = this.paginator;
    this.getAllTutors();
  }

  ngAfterViewInit() {
    this.profiles.sort = this.sort;
  }

  goToCoursesOfTutor(id: number, personName: string) {
    localStorage.setItem('profileId', id.toString());
    localStorage.setItem('personName', personName);
    this.router.navigateByUrl('/courses').then()
  }

  getAllTutors() {
    this.profilesService.getAll().subscribe((profilesResponse: any) => {
      forEach(profilesResponse, (profileResponse: any) => {
        if(profileResponse.profileType == "Instructor") {
          this.profiles.data.push(profileResponse);

        }
      })
      console.log("profilesInstructors",this.profiles.data);
    });

  }
  favorited(element: Profile): void {

  }

  protected readonly onsubmit = onsubmit;
}
