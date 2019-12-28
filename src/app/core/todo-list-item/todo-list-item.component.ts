import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input()
  public course: Course;
  constructor() { }

  ngOnInit() {
  }

}
