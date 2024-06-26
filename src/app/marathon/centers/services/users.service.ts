import {Injectable} from "@angular/core";
import {BaseService} from "../../../shared/services/base.service";
import {Profile} from "../../participants/model/profile";
import {HttpClient} from "@angular/common/http";
import {User} from "../../participants/model/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/auth';
  }

}
