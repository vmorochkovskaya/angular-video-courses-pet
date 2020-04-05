import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListItemComponent} from './todo-list-item.component';
import {Course} from '../../../entities/course';
import {By} from '@angular/platform-browser';
import {HourDurationPipe} from '../../../../pipes/hour-duration.pipe';
import {BorderOnCreationDateDirective} from '../../../../directives/border-on-creation-date.directive';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListItemComponent,
        BorderOnCreationDateDirective, HourDurationPipe],
    imports: []})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const course: Course = {
      id: 42, title: 'Test', creationDate:
        '2019-12-12T00:00:00', duration: 60, description: 'Description', topRated: true
    };
    component.course = course;
    expect(component).toBeTruthy();
  });

  it('raises the selected event when clicked', () => {
    const course: Course = {
      id: 42, title: 'Test', creationDate:
        '2019-12-12T00:00:00', duration: 60, description: 'Description', topRated: true
    };
    component.course = course;
    component.onDelete.subscribe((selectedCourseId: number) => expect(selectedCourseId).toBe(42));
  });

  it('should listen for form changes', () => {
    const course: Course = {
      id: 42, title: 'Test', creationDate:
        '2019-12-12T00:00:00', duration: 60, description: 'Description', topRated: true
    };
    component.course = course;
    const spy = spyOn(component, 'delete');
    fixture.debugElement.query(By.css('a[name-entity.ts=Delete]')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should listen for form changes', () => {
    const spy = spyOn(component.onDelete, 'emit');
    const course: Course = {
      id: 42, title: 'Test', creationDate: '2019-12-12T00:00:00',
      duration: 60, description: 'Description', topRated: true
    };
    component.course = course;
    component.delete();
    expect(spy).toHaveBeenCalledWith(component.course.id);
  });

  it('should console log ngOnInit', () => {
    const spy = spyOn(console, 'log');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

});
