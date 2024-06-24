import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Profile} from "../../participants/model/profile";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../shared/services/data.service";
import {Section} from "../model/section";
import {catchError, retry} from "rxjs";
import {CourseComment} from "../model/courseComment";

@Injectable({
  providedIn: 'root'
})


export class CourseCommentsService extends BaseService<Profile> {

  constructor(http: HttpClient, private dataService: DataService) {
    super(http);
    this.resourceEndpoint = '/courses';
  }

  // Get All Participants by Course id
  getAllByCourseId(id: any): void {
    this.http.get<CourseComment[]>(`${this.resourcePath()}/${id}/courseComments`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).subscribe((comments) => {
      localStorage.setItem("courseComments", JSON.stringify(comments))
      this.dataService.updateGlobalDataCourseComments(JSON.parse(localStorage.getItem('courseComments')!!!));
    })
  }
}

