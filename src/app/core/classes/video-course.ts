import {Course} from '../course';

export class VideoCourse implements Course {
  creationDate: string;
  description: string;
  duration: number;
  id: number;
  title: string;
  topRated: boolean;
}
