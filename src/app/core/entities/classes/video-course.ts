import {Course} from '../course';
import {Author} from '../author';

export class VideoCourse implements Course {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: Author[];
}
