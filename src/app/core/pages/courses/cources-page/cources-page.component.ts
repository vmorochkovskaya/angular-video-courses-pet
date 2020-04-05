import {
  AfterContentChecked,
  Component, Input,
  OnInit
} from '@angular/core';
import {CoursesService} from '../../../../services/courses.service';
import {Course} from '../../../entities/course';

@Component({
  selector: 'app-cources-page',
  templateUrl: './cources-page.component.html',
  styleUrls: ['./cources-page.component.scss']
})
export class CourcesPageComponent implements OnInit, AfterContentChecked {

  @Input()
  public searchCourseTitle: string;

  public courses: Course[];
  limit = 5;

  constructor(private coursesService: CoursesService) {
    console.log(`courses page constructor`);
    this.searchCourseTitle = '';
  }

  ngOnInit() {
    this.getCourses();
  }

  private getCourses() {
    this.coursesService.getList(0, this.limit).subscribe((courses: Course[]) => {
      console.log(courses);
      this.courses = courses;
    });
  }

  update(id: number) {
    this.coursesService.removeCourse(id.toString()).subscribe();
    this.getCourses();
  }

  refreshSeearch(text: string) {
    this.searchCourseTitle = text;
    this.limit = 5;
    console.log(text);
    this.searchCourse(this.searchCourseTitle, this.limit);
  }

  private searchCourse(text: string, limit: number) {
    this.coursesService.getListWithSearch(text, 0, limit).subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }

  loadMore(limit: number) {
    console.log('load more in action');
    this.limit += limit;
    if (this.searchCourseTitle !== '') {
      this.searchCourse(this.searchCourseTitle, this.limit);
    } else {
      this.coursesService.getList(0, this.limit).subscribe((courses: Course[]) => {
        this.courses = courses;
      });
    }
  }

  ngAfterContentChecked() {
    // this.coursesService.getList(0, this.limi)
    // this.items = new FilterCourseByNamePipe().transform(this.items, this.titleToFind);
  }
}
