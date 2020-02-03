import {Injectable} from '@angular/core';
import {Course} from '../core/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: Course[] = [
    {
      id: 1,
      creationDate: '2020-01-12T00:00:00',
      description: 'Some description for course1',
      duration: 60,
      title: 'Video Course 24',
      topRated: true
    },
    {
      id: 2,
      creationDate: '2020-01-19T00:00:00',
      description: 'Some description for course2',
      duration: 80,
      title: 'Video Course 2',
      topRated: true
    },

    {
      id: 3,
      creationDate: '2020-02-14T00:00:00',
      description: 'Some description for course3',
      duration: 120,
      title: 'Video Course 3',
      topRated: false
    },

    {
      id: 4,
      creationDate: '2019-11-07T00:00:00',
      description: 'Some description for course4',
      duration: 45,
      title: 'Video Course 4',
      topRated: false
    }
  ];

  constructor() {
  }

  getList(): Course[] {
    return this.courses;
  }

  createCourse(course: Course) {
    this.courses.concat(course);
  }

  getCourseById(id: number): Course {
    return this.courses.find(item => item.id === id);
  }

  updateCourse(course: Course) {
    const itemIndex = this.courses.findIndex(item => item.id === course.id);
    this.courses[itemIndex] = course;
  }

  removeCourse(id: number): Course[] {
    return this.courses = this.courses.filter((item: Course) => item.id !== id);
  }
}
