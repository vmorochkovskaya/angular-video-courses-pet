import {
  Component, Input,
  OnInit
} from '@angular/core';
import {CoursesService} from '../../../../services/courses.service';
import {Observable} from 'rxjs';
import {Course} from '../../../course';

@Component({
  selector: 'app-cources-page',
  templateUrl: './cources-page.component.html',
  styleUrls: ['./cources-page.component.scss']
})
export class CourcesPageComponent implements OnInit {

  @Input()
  public searchCourseTitle: string;

  // public isAddCourse = false;
  courses: Course[];

  constructor(private coursesService: CoursesService) {
    console.log(`courses page constructor`);
    this.searchCourseTitle = '';
  }

  ngOnInit() {
    // console.log(`courses page ngOnInit`);
    // this.searchCourseTitle = '';
    this.courses = this.coursesService.getList();
  }

  update(id: number) {
    console.log(id);
    this.courses = this.coursesService.removeCourse(id);
  }

  refreshSeearch(text: string) {
    this.searchCourseTitle = text;
  }

  // isAddNewCourse(isAdd: boolean) {
  //   this.isAddCourse = isAdd;
  // }

}
