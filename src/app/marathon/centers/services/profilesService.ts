import {Injectable} from "@angular/core";
import {BaseService} from "../../../shared/services/base.service";
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../../participants/model/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService extends BaseService<Profile>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/profiles';
  }

}
