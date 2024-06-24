import {Profile} from "./profile";

export interface UserComment {
  "id": number;
  "content": string;
  "timeAgo": string;
  "rating": number;
  "tutorId": number;
  "userId": number;
  "user": Profile;
}
