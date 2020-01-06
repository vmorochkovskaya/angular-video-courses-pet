import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {Course} from '../course';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit, DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit {
  @Input()
  public course: Course;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log(`item constructor`);
  }

  ngOnInit() {
    console.log(`item ngOnInit`);
  }

  ngOnChanges() {
    console.log(`item OnChanges`);
  }

  ngDoCheck() {
    console.log(`item ngDoCheck`);
  }

  ngAfterViewInit() {
    console.log(`item ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`item ngAfterViewChecked`);
  }

  ngAfterContentInit() {
    console.log(`item ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`item ngAfterContentChecked`);
  }

  delete() {
    this.onDelete.emit(this.course.id);
  }
}
