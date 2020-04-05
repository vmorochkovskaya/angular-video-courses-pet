import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../entities/course';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleteInList: EventEmitter<number> = new EventEmitter<number>();

  @Output() onIncrementLimit: EventEmitter<any> = new EventEmitter<any>();


  @Input() public titleToFind: string;

  @Input() public items: Course[];


  constructor() {
    this.titleToFind = '';
  }

  ngOnInit() {
    this.titleToFind = '';
  }

  onRootDelete(id: number) {
    this.onDeleteInList.emit(id);
  }

  onClickLoadMore() {
    this.onIncrementLimit.emit(10);
  }
}
