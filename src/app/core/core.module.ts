import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {SectionComponent} from './section/section.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import {CourcesPageComponent} from './pages/cources-page/cources-page.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {FormsModule} from '@angular/forms';
import {BorderOnCreationDateDirective} from '../directives/border-on-creation-date.directive';
import {HourDurationPipe} from '../pipes/hour-duration.pipe';
import {OrderByPipe} from '../pipes/order-by.pipe';
import {FilterCourseByNamePipe} from '../pipes/filter-course-by-name.pipe';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {LoginPageModule} from "./pages/login-page/login-page.module";


@NgModule({
  declarations: [TodoListComponent,
    TodoListItemComponent,
    SectionComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CourcesPageComponent,
    BreadcrumbsComponent,
    BorderOnCreationDateDirective,
    HourDurationPipe,
    OrderByPipe,
    FilterCourseByNamePipe,
    DeleteModalComponent],
  exports: [
    TodoListComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CourcesPageComponent,
    HourDurationPipe,
    OrderByPipe,
    TodoListItemComponent,
    BorderOnCreationDateDirective,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    LoginPageModule
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
