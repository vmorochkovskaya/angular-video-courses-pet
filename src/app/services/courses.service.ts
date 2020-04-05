import {Injectable} from '@angular/core';
import {Course} from '../core/entities/course';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private urlTemplate = 'http://localhost:3004/courses';

  constructor(private http: HttpClient) {
  }

  getList(startParam: number, countParam: number): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlTemplate, {
      observe: 'body',
      params: {start: startParam.toString(), count: countParam.toString()}
    });
  }

  getListWithSearch(searchText: string, startParam: number, countParam: number): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlTemplate, {
      observe: 'body',
      params: {start: startParam.toString(), count: countParam.toString(), textFragment: searchText}
    });
  }

  createCourse(course: Course) {
    // this.courses.concat(course);
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(this.urlTemplate, {
      observe: 'body',
      params: {id}
    });
  }

  updateCourse(course: Course) {
    // const itemIndex = this.courses.findIndex(item => item.id === course.id);
    // this.courses[itemIndex] = course;
  }

  addCourse(course: Course): Observable<Course>  {
    return this.http.post<Course>(this.urlTemplate, course)
      .pipe();
  }

  removeCourse(id: string): Observable<any> {
    return this.http.delete<any>(this.urlTemplate + `/${id}`).pipe();
  }
}
