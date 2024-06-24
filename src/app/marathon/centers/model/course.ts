import {Topic} from "./topic";

export interface Course {
  "id": number;
  "name": string;
  "photoUrl": string;
  "description": string;
  "topic": Topic;
  "topicId": number;
  "cost": number;
  "rating": number;
  "nRatings": number;
  "nStudents": number;
  "nHours": number;
  "instructorId": number;
}
