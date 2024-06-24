import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../shared/services/data.service";
import {Section} from "../model/section";
import {catchError, retry} from "rxjs";
import {BaseService} from "../../../shared/services/base.service";
import {Lesson} from "../model/lesson";

@Injectable({
  providedIn: 'root'
})
export class SectionLessonsService extends BaseService<any>{

  constructor(http: HttpClient, private dataService: DataService) {
    super(http);
    this.resourceEndpoint = '/sections';
  }

  // Get All Participants by Course id
  getAllBySectionId(id: any): void {
    this.http.get<Lesson[]>(`${this.resourcePath()}/${id}/lessons`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).subscribe((lessons) => {
      localStorage.setItem("sectionLessons", JSON.stringify(lessons))
      this.dataService.updateGlobalDataLessons(JSON.parse(localStorage.getItem('sectionLessons')!!!));
    })
  }
}
