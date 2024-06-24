import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private globalDataSubject = new BehaviorSubject<any>(null);
  globalData$ = this.globalDataSubject.asObservable();

  private globalDataLessons = new BehaviorSubject<any>(null);
  globalDataLessons$ = this.globalDataLessons.asObservable();

  private globalDataCourseComments = new BehaviorSubject<any>(null);
  globalDataCourseComments$ = this.globalDataCourseComments.asObservable();

  private globalDataTutorComments = new BehaviorSubject<any>(null);
  globalDataTutorComments$ = this.globalDataTutorComments.asObservable();

  private globalDataTopicCourses = new BehaviorSubject<any>(null);
  globalDataTopicCourses$ = this.globalDataTopicCourses.asObservable();

  updateGlobalData(data: any) {
    this.globalDataSubject.next(data);
  }

  updateGlobalDataLessons(data: any) {
    this.globalDataLessons.next(data);
  }

  updateGlobalDataCourseComments(data: any) {
    this.globalDataCourseComments.next(data);
  }

  updateGlobalDataTutorComments(data: any) {
    this.globalDataTutorComments.next(data);
  }

  updateGlobalDataTopicCourses(data: any) {
    this.globalDataTopicCourses.next(data);
  }
}
