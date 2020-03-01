import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {AddCoursePageComponent} from './add-course-page/add-course-page.component';
import {CourcesPageComponent} from './cources-page/cources-page.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {
    path: 'courses-page',
    canActivate: [AuthGuard],
    component: CourcesPageComponent
  },

  {
    path: 'course/new',
    canActivate: [AuthGuard],
    component: AddCoursePageComponent,
  },
  {
    path: 'course/:id',
    canActivate: [AuthGuard],
    component: CourseDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
