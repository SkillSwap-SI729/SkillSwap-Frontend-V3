import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Topic} from "../model/topic";

@Injectable({
  providedIn: 'root'
})
export class TopicsService extends BaseService<Topic>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/topics';
  }

}
