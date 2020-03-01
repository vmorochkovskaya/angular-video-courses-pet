import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoListComponent} from './todo-list.component';
import {FormsModule} from '@angular/forms';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';
import {By} from '@angular/platform-browser';
import {Course} from '../../../course';
import {OrderByPipe} from '../../../../pipes/order-by.pipe';
import {HourDurationPipe} from '../../../../pipes/hour-duration.pipe';
import {BorderOnCreationDateDirective} from "../../../../directives/border-on-creation-date.directive";

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoListItemComponent, OrderByPipe, HourDurationPipe, BorderOnCreationDateDirective],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onRootDelete when Delete is clicked', () => {
    const spy = spyOn(component, 'onRootDelete');
    fixture.debugElement.query(By.directive(TodoListItemComponent)).triggerEventHandler('onDelete', 1);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should delete item from items when Delete is clicked', () => {
    const item: Course = {
      id: 2,
      creationDate:  '2019-12-12T00:00:00',
      description: 'Some description for course2',
      duration: 80,
      title: 'Video Course 2',
      topRated: true
    };
    const items: Course[] = [
      {
        id: 1,
        creationDate:  '2019-12-12T00:00:00',
        description: 'Some description for course1',
        duration: 60,
        title: 'Video Course 1',
        topRated: true
      },
      item];
    component.items = items;
    const sp = spyOn(component.items, 'filter');
    component.onRootDelete(1);
    expect(sp).toHaveBeenCalled();
  });
});
