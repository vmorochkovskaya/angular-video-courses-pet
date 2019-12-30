import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input()
  public course: Course;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.course.id);
  }
}
