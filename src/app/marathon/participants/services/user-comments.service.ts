import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Profile} from "../model/profile";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../shared/services/data.service";
import {catchError, retry} from "rxjs";
import {UserComment} from "../model/userComment";

@Injectable({
  providedIn: 'root'
})
export class UserCommentsService extends BaseService<Profile> {

  constructor(http: HttpClient, private dataService: DataService) {
    super(http);
    this.resourceEndpoint = '/users';
  }

  // Get All Participants by Course id
  getAllByTutorId(id: any): void {
    this.http.get<UserComment[]>(`${this.resourcePath()}/${id}/commentsReceived`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).subscribe((comments) => {
      localStorage.setItem("tutorComments", JSON.stringify(comments))
      this.dataService.updateGlobalDataTutorComments(JSON.parse(localStorage.getItem('tutorComments')!!!));
    })
  }
}
