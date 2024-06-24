import {Profile} from "../../participants/model/profile";

export interface CourseComment {
  "id": number;
  "content": string;
  "timeAgo": string;
  "rating": number;
  "courseId": number;
  "userId": number;
  "user": Profile;
}
