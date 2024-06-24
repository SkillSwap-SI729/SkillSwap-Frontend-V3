import {Injectable} from "@angular/core";
import {BaseService} from "../../../shared/services/base.service";
import {Topic} from "../model/topic";
import {HttpClient} from "@angular/common/http";
import {LearningPathItem} from "../model/LearningPathItem";

@Injectable({
  providedIn: 'root'
})
export class LearningPathItemsService extends BaseService<LearningPathItem>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/learningPathItems';
  }

}
