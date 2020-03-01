import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseDetailsComponent} from './course-details/course-details.component';
import {FormsModule} from '@angular/forms';
import {CourcesPageComponent} from './cources-page/cources-page.component';
import {AddCoursePageComponent} from './add-course-page/add-course-page.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {SectionComponent} from './section/section.component';
import {DateInputComponent} from '../../date-input/date-input.component';
import {DurationInputComponent} from '../../duration-input/duration-input.component';
import {AuthorsInputComponent} from '../../authors-input/authors-input.component';
import {OrderByPipe} from '../../../pipes/order-by.pipe';
import {BorderOnCreationDateDirective} from '../../../directives/border-on-creation-date.directive';
import {HourDurationPipe} from '../../../pipes/hour-duration.pipe';
import {CoursesRoutingModule} from './courses-routing.module';


@NgModule({
  declarations: [CourseDetailsComponent,
    CourcesPageComponent,
    AddCoursePageComponent,
    TodoListComponent,
    TodoListItemComponent,
    SectionComponent,
    DateInputComponent,
    DurationInputComponent,
    AuthorsInputComponent,
    OrderByPipe,
    BorderOnCreationDateDirective,
    HourDurationPipe],
  exports: [
    CourcesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule]
})
export class CoursesModule {
}
