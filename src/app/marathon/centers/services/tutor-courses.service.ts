import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, Subscription, map, switchMap} from "rxjs";
import {Profile} from "../../participants/model/profile";
import {CoursesService} from "./courses.service";
import {DataService} from "../../../shared/services/data.service";
import {Course} from "../model/course";

@Injectable({
  providedIn: 'root'
})
export class TutorCoursesService extends BaseService<Profile> {

  constructor(http: HttpClient, private dataService: DataService) {
    super(http);
    this.resourceEndpoint = '/users';
  }

  // Get All Participants by Course id
  getAllByUserId(id: any): void {
    this.http.get<Course[]>(`${this.resourcePath()}/${id}/courses`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).subscribe((courses) => {
      localStorage.setItem("coursesOfUser", JSON.stringify(courses))
      this.dataService.updateGlobalData(JSON.parse(localStorage.getItem('coursesOfUser')!!!));
    })
  }


}
