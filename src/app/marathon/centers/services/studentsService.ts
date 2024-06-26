import {Injectable} from "@angular/core";
import {BaseService} from "../../../shared/services/base.service";
import {Instructor} from "../../participants/model/Instructor";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends BaseService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/students';
  }

  getByProfileId(profileId: any): Observable<Instructor> {
    return this.http.get<Instructor>(`${this.resourcePath()}/profileId/${profileId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
