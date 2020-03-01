import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {FormsModule} from '@angular/forms';
import {FilterCourseByNamePipe} from '../pipes/filter-course-by-name.pipe';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginPageModule} from './pages/login-page/login-page.module';
import {CoursesModule} from './pages/courses/courses.module';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {CourcesPageComponent} from "./pages/courses/cources-page/cources-page.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    FilterCourseByNamePipe,
    DeleteModalComponent,
    PageNotFoundComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    DeleteModalComponent,
    CourcesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CoursesModule,
    LoginPageModule,
    RouterModule
  ],
  providers: [
    NgbActiveModal,
  ],
  entryComponents: [
    DeleteModalComponent,
  ],
})
export class CoreModule {
}
