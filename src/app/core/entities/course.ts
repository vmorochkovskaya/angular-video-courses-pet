import {Author} from './author';

export interface Course {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: Author[];
}
