import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Course} from '../course';
import {VideoCourse} from '../classes/video-course';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleteInList: EventEmitter<number> = new EventEmitter<number>();
  public items: Course[];


  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        id: 1,
        creationDate: new Date(),
        description: 'Some description for course1',
        duration: 60,
        title: 'Video Course 1',
      },
      {
        id: 2,
        creationDate: new Date(),
        description: 'Some description for course2',
        duration: 80,
        title: 'Video Course 2',
      },

      {
        id: 3,
        creationDate: new Date(),
        description: 'Some description for course3',
        duration: 120,
        title: 'Video Course 3',
      },

      {
        id: 4,
        creationDate: new Date(),
        description: 'Some description for course4',
        duration: 60,
        title: 'Video Course 4',
      }
    ];
  }

  onRootDelete(id: number) {
    this.items = this.items.filter((item: VideoCourse) => item.id !== id);
    this.onDeleteInList.emit(id);
  }
}
