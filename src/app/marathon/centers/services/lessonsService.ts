import {Injectable} from "@angular/core";
import {BaseService} from "../../../shared/services/base.service";
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LessonsService extends BaseService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/lessons';
  }

}
