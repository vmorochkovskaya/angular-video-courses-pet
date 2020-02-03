import {AfterContentChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../course';
import {VideoCourse} from '../classes/video-course';
import {FilterCourseByNamePipe} from '../../pipes/filter-course-by-name.pipe';
import {CoursesService} from '../../services/courses.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterContentChecked {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleteInList: EventEmitter<number> = new EventEmitter<number>();

  @Input() public titleToFind: string;

  public items: Course[];


  constructor(private coursesService: CoursesService) {
    this.titleToFind = '';
  }

  ngOnInit() {
    this.titleToFind = '';
    this.items = this.coursesService.getList();
  }

  ngAfterContentChecked() {
    this.items = new FilterCourseByNamePipe().transform(this.items, this.titleToFind);
  }

  onRootDelete(id: number) {
    this.items = this.coursesService.removeCourse(id);
    this.onDeleteInList.emit(id);
  }

  onClick() {
    console.log('Load more click');
  }
}
