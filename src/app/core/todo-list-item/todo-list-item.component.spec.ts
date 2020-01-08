import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListItemComponent} from './todo-list-item.component';
import {Course} from "../course";
import {By} from "@angular/platform-browser";

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected event when clicked', () => {
    const course: Course = {id: 42, title: 'Test', creationDate: new Date(), duration: 60, description: 'Description'};
    component.course = course;
    component.onDelete.subscribe((selectedCourseId: number) => expect(selectedCourseId).toBe(42));
  });

  it('should listen for form changes', () => {
    const spy = spyOn(component, 'delete');
    fixture.debugElement.query(By.css('a[name=Delete]')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should listen for form changes', () => {
    const spy = spyOn(component.onDelete, 'emit');
    const course: Course = {id: 42, title: 'Test', creationDate: new Date(), duration: 60, description: 'Description'};
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
