import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../model/profile";
import {Instructor} from "../model/Instructor";
import {Course} from "../../centers/model/course";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InstructorsService extends BaseService<Instructor>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/instructors';
  }

  getByProfileId(profileId: any): Observable<Instructor> {
    return this.http.get<Instructor>(`${this.resourcePath()}/profileId/${profileId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
