import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {Course} from '../../../course';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteModalComponent} from '../../../delete-modal/delete-modal.component';
import {Router} from '@angular/router';
import {CoursesService} from '../../../../services/courses.service';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent implements OnInit, DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit {
  @Input()
  public course: Course;
  closeResult: string;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private modalService: NgbModal, private router: Router, private coursesService: CoursesService){
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
    this.modalService.open(DeleteModalComponent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.onDelete.emit(this.course.id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  navigateToDetails() {
    this.router.navigate(['course', this.course.id], {queryParams: {redirectedFromClass: true}});
  }
}
