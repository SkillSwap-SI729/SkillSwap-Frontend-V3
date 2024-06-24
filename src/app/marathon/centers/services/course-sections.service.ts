import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../shared/services/data.service";
import {Course} from "../model/course";
import {catchError, retry} from "rxjs";
import {BaseService} from "../../../shared/services/base.service";
import {Profile} from "../../participants/model/profile";
import {Section} from "../model/section";

@Injectable({
  providedIn: 'root'
})
export class CourseSectionsService extends BaseService<Profile> {

  constructor(http: HttpClient, private dataService: DataService) {
    super(http);
    this.resourceEndpoint = '/courses';
  }

  // Get All Participants by Course id
  getAllByCourseId(id: any): void {
    this.http.get<Section[]>(`${this.resourcePath()}/${id}/sections`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).subscribe((sections) => {
      localStorage.setItem("courseSections", JSON.stringify(sections))
      this.dataService.updateGlobalData(JSON.parse(localStorage.getItem('courseSections')!!!));
    })
  }
}
