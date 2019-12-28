import {Course} from '../course';

export class VideoCourse implements Course {
  creationDate: Date;
  description: string;
  duration: number;
  id: number;
  title: string;

  getFakeCourse() {
    this.creationDate = new Date();
    this.description = 'Some description for course';
    this.duration = 60;
    this.title = 'Video Course 1';
    return this;
  }
}
