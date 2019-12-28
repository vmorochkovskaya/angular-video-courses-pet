import {Component, OnInit} from '@angular/core';
import {Course} from '../course';
import {VideoCourse} from "../classes/video-course";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public items: Course[];

  constructor() {
  }

  ngOnInit() {
    this.items = [new VideoCourse().getFakeCourse(),
      new VideoCourse().getFakeCourse(),
      new VideoCourse().getFakeCourse(),
      new VideoCourse().getFakeCourse()];
  }
}
