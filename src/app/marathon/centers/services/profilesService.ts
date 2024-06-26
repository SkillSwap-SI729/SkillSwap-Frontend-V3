import {Injectable} from "@angular/core";
import {BaseService} from "../../../shared/services/base.service";
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../../participants/model/profile";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService extends BaseService<Profile>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/profiles';
  }

  getByUserId(userId: any): Observable<Profile> {
    return this.http.get<Profile>(`${this.resourcePath()}/userId/${userId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
