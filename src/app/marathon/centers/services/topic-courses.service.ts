import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../shared/services/data.service";
import {catchError, retry} from "rxjs";
import {Course} from "../model/course";

@Injectable({
  providedIn: 'root'
})
export class TopicCoursesService extends BaseService<any>{

  constructor(http: HttpClient, private dataService: DataService) {
    super(http);
    this.resourceEndpoint = '/topics';
  }

  // Get All Participants by Course id
  getAllByTopicId(id: any): void {
    this.http.get<Course[]>(`${this.resourcePath()}/${id}/courses`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).subscribe((courses) => {
      localStorage.setItem("topicCourses", JSON.stringify(courses))
      this.dataService.updateGlobalDataTopicCourses(JSON.parse(localStorage.getItem('topicCourses')!!!));
    })
  }
}
